const { test } = require('node:test');
const assert = require('node:assert/strict');
const { loadMetric } = require('../assets/js/project-metrics.js');
const vm = require('node:vm');
const fs = require('node:fs');

test('collection totals include each model once and exclude datasets, Spaces and papers', async () => {
  const requested = [];
  const result = await loadMetric({ kind: 'model', collection: 'owner/project' }, async path => {
    requested.push(path);
    if (path.startsWith('collections/')) return { items: [
      { type: 'model', id: 'owner/a' }, { type: 'model', id: 'owner/a' },
      { type: 'model', id: 'owner/b' }, { type: 'dataset', id: 'owner/data' },
      { type: 'space', id: 'owner/demo' }, { type: 'paper', id: '2609.23038' }
    ] };
    return { downloads: 9999, downloadsAllTime: path.includes('/a?') ? 120 : 0 };
  });
  assert.equal(result.downloads_total, 120);
  assert.equal(requested.length, 3);
  assert.deepEqual(result.repos, ['owner/a', 'owner/b']);
});

test('shared GitHub counters refresh once, keep fallback on errors and work without localStorage', async () => {
  for (const mode of ['success', 'rate-limit', 'missing-count']) {
    let requests = 0;
    const values = [{ textContent: '249' }, { textContent: '249' }];
    const links = values.map(value => ({
      dataset: { githubRepo: 'owner/shared' },
      querySelector: () => value,
      setAttribute: () => {}
    }));
    const document = {
      getElementById: id => ({ textContent: id === 'hf-metrics-data' ? '{}' :
        JSON.stringify({ 'owner/shared': { checked_at: '2026-10-04T00:00:00Z' } }) }),
      querySelectorAll: selector => selector === '[data-hf-metric]' ? [] : links
    };
    vm.runInNewContext(fs.readFileSync(require.resolve('../assets/js/project-metrics.js'), 'utf8'), {
      document, window: {}, AbortController, setTimeout, clearTimeout,
      localStorage: { getItem() { throw new Error('disabled'); }, setItem() { throw new Error('disabled'); } },
      fetch: async () => {
        requests++;
        return { ok: mode !== 'rate-limit', json: async () => mode === 'missing-count' ? {} : { stargazers_count: 251 } };
      }
    });
    await new Promise(resolve => setImmediate(resolve));
    assert.equal(requests, 1);
    assert.deepEqual(values.map(v => v.textContent), mode === 'success' ? ['251', '251'] : ['249', '249']);
  }
});

test('missing, invalid and failed counts reject instead of producing a misleading partial total', async () => {
  for (const bad of [undefined, null, -1, '100']) {
    await assert.rejects(loadMetric({ kind: 'dataset', repos: ['owner/a', 'owner/b'] }, async path =>
      ({ downloadsAllTime: path.includes('/a?') ? 120 : bad })));
  }
  await assert.rejects(loadMetric({ kind: 'model', repos: ['owner/a', 'owner/b'] }, async path => {
    if (path.includes('/b?')) throw new Error('HTTP 503');
    return { downloadsAllTime: 120 };
  }));
  await assert.rejects(loadMetric({ kind: 'model', collection: 'owner/project' }, async () => ({ items: [] })));
});

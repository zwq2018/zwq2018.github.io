(function () {
  "use strict";

  function repoIds(metric, collection) {
    const repos = collection
      ? collection.items.filter(item => item.type === metric.kind).map(item => item.id)
      : metric.repos;
    const unique = [...new Set(repos)];
    if (!unique.length || unique.some(id => typeof id !== "string" || !/^[\w.-]+\/[\w.-]+$/.test(id))) {
      throw new Error("Invalid repository list");
    }
    return unique;
  }

  async function loadMetric(metric, getJSON) {
    const collection = metric.collection ? await getJSON("collections/" + metric.collection) : null;
    const repos = repoIds(metric, collection);
    const values = await Promise.all(repos.map(async repo => {
      const data = await getJSON(metric.kind + "s/" + repo + "?expand[]=downloadsAllTime");
      if (!Number.isSafeInteger(data.downloadsAllTime) || data.downloadsAllTime < 0) {
        throw new Error("Cumulative downloads unavailable");
      }
      return data.downloadsAllTime;
    }));
    return { downloads_total: values.reduce((sum, count) => sum + count, 0), repos: repos,
      checked_at: new Date().toISOString() };
  }

  if (typeof module !== "undefined" && module.exports) module.exports = { repoIds, loadMetric };
  if (typeof document === "undefined") return;
  const source = document.getElementById("hf-metrics-data");
  if (!source) return;
  const metrics = JSON.parse(source.textContent);
  const requests = new Map();
  const queue = [];
  let active = 0;

  function drain() {
    while (active < 4 && queue.length) {
      active++;
      const job = queue.shift();
      job().finally(() => { active--; drain(); });
    }
  }

  function getJSON(path) {
    if (!requests.has(path)) {
      requests.set(path, new Promise((resolve, reject) => {
        queue.push(async () => {
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 8000);
          try {
            const url = path.startsWith("https://api.github.com/repos/") ? path : "https://huggingface.co/api/" + path;
            const response = await fetch(url,
              { signal: controller.signal, credentials: "omit" });
            if (!response.ok) throw new Error("Metadata request failed");
            resolve(await response.json());
          } catch (error) { reject(error); }
          finally { clearTimeout(timeout); }
        });
        drain();
      }));
    }
    return requests.get(path);
  }

  function render(link, metric, data) {
    const count = data.downloads_total.toLocaleString("en-US");
    const scope = metric.collection
      ? "Sum across " + data.repos.length + " " + metric.kind + " repositories in the collection"
      : data.repos.join(", ");
    link.querySelector(".hf-downloads-value").textContent = count + " Total";
    link.title = "Hugging Face cumulative " + metric.label.toLowerCase() + ": " + count +
      ". " + scope + ". Updated " + data.checked_at.slice(0, 10) + ".";
    link.setAttribute("aria-label", link.title);
    link.dataset.checkedAt = data.checked_at;
  }

  async function update(link) {
    const metric = metrics[link.dataset.hfMetric];
    if (!metric) return;
    const cacheKey = "hf-downloads-v1:" + metric.kind + ":" + (metric.collection || metric.repos.join(","));
    try {
      const cached = JSON.parse(localStorage.getItem(cacheKey));
      const age = cached && Date.now() - Date.parse(cached.checked_at);
      if (cached && Number.isSafeInteger(cached.downloads_total) && cached.downloads_total >= 0 &&
          Array.isArray(cached.repos) && cached.repos.length && age >= 0 && age < 86400000 &&
          Date.parse(cached.checked_at) >= Date.parse(metric.checked_at)) {
        render(link, metric, cached);
        return;
      }
    } catch (_) { /* Storage may be disabled; keep the rendered fallback. */ }
    try {
      const data = await loadMetric(metric, getJSON);
      render(link, metric, data);
      try { localStorage.setItem(cacheKey, JSON.stringify(data)); } catch (_) {}
    } catch (_) {
      // A partial/failed collection refresh must not replace the verified total.
    }
  }

  const links = document.querySelectorAll("[data-hf-metric]");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { observer.unobserve(entry.target); update(entry.target); }
      });
    }, { rootMargin: "300px" });
    links.forEach(link => observer.observe(link));
  } else {
    links.forEach(update);
  }

  const githubSource = document.getElementById("github-metrics-data");
  if (!githubSource) return;
  const githubMetrics = JSON.parse(githubSource.textContent);
  const starLinks = document.querySelectorAll("[data-github-repo]");
  function renderStars(repo, value) {
    starLinks.forEach(link => {
      if (link.dataset.githubRepo !== repo) return;
      const count = value.stars.toLocaleString("en-US");
      link.querySelector(".project-stars-value").textContent = count;
      link.title = repo + " repository: " + count + " GitHub stars. Updated " + value.checked_at.slice(0, 10) + ".";
      link.setAttribute("aria-label", link.title);
      link.dataset.checkedAt = value.checked_at;
    });
  }
  async function updateStars(repo) {
    const key = "github-stars-v1:" + repo;
    try {
      const cached = JSON.parse(localStorage.getItem(key));
      const age = cached && Date.now() - Date.parse(cached.checked_at);
      if (cached && Number.isSafeInteger(cached.stars) && cached.stars >= 0 && age >= 0 && age < 3600000 &&
          Date.parse(cached.checked_at) >= Date.parse(githubMetrics[repo].checked_at)) {
        renderStars(repo, cached);
        return;
      }
    } catch (_) {}
    try {
      const data = await getJSON("https://api.github.com/repos/" + repo);
      if (!Number.isSafeInteger(data.stargazers_count) || data.stargazers_count < 0) return;
      const value = { stars: data.stargazers_count, checked_at: new Date().toISOString() };
      renderStars(repo, value);
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) {}
    } catch (_) { /* API outages/rate limits leave the verified fallback and its date intact. */ }
  }
  const started = new Set();
  function startStars(link) {
    const repo = link.dataset.githubRepo;
    if (!githubMetrics[repo] || started.has(repo)) return;
    started.add(repo);
    updateStars(repo);
  }
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { observer.unobserve(entry.target); startStars(entry.target); }
      });
    }, { rootMargin: "300px" });
    starLinks.forEach(link => observer.observe(link));
  } else { starLinks.forEach(startStars); }
})();

"""Refresh the homepage's no-JavaScript fallback from public Hugging Face metadata."""

import json
from datetime import datetime, timezone
from functools import lru_cache
from pathlib import Path
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "_data/huggingface_metrics.json"


@lru_cache(maxsize=None)
def get_json(path):
    request = Request("https://huggingface.co/api/" + path,
                      headers={"User-Agent": "academic-homepage-metrics/1.0"})
    with urlopen(request, timeout=30) as response:
        return json.load(response)


def refresh():
    metrics = json.loads(DATA.read_text())
    for key, metric in metrics.items():
        if metric.get("collection"):
            items = get_json("collections/" + metric["collection"])["items"]
            metric["repos"] = sorted({item["id"] for item in items
                                      if item["type"] == metric["kind"]})
        repos = sorted(set(metric["repos"]))
        if not repos:
            raise ValueError(f"No {metric['kind']} repositories for {key}")
        totals = []
        for repo in repos:
            data = get_json(metric["kind"] + "s/" + repo + "?expand[]=downloadsAllTime")
            count = data.get("downloadsAllTime")
            if type(count) is not int or count < 0:
                raise ValueError(f"Missing cumulative downloads for {repo}")
            totals.append(count)
        metric["downloads_total"] = sum(totals)
        metric["display_total"] = f"{sum(totals):,}"
        metric["checked_at"] = datetime.now(timezone.utc).isoformat(timespec="seconds")
        print(f"{key}: {metric['display_total']} total ({len(repos)} repositories)")
    # Write only after every source succeeds; never replace an unavailable value with zero.
    DATA.write_text(json.dumps(metrics, ensure_ascii=False, indent=2) + "\n")


if __name__ == "__main__":
    refresh()

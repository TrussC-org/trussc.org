# TrussC Website

Official website for [TrussC](https://github.com/TrussC-org/TrussC) - a lightweight creative coding framework for C++.

## Hosting

Hosted on GitHub Pages at https://TrussC.org

## Local Development

```bash
# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

## Structure

- `index.html` - Main page (EN)
- `ja/` - Japanese pages
- `ko/` - Korean pages
- `examples/` - Interactive WASM examples
- `assets/` - Images and logos

## Reference data

`generated/` (the API reference, TrussSketch data and the oF mapping) is regenerated
from TrussC's `main` branch every night on macOS by
`.github/workflows/regen-reference.yml`, which commits only when the data changed.
Don't edit those files by hand. A failed run keeps the last good data and is not
visible on the site, so check the run status after TrussC build or docs changes:

```bash
gh run list -R TrussC-org/trussc.org --workflow regen-reference.yml --limit 5
gh workflow run regen-reference.yml -R TrussC-org/trussc.org   # run it now
```

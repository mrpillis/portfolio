# Humanoids at Home: project page

Static project page for GitHub Pages. No build step.

```
index.html   content
style.css    styles
main.js      attribute explorer + replay viewer tabs
assets/      videos (converted from the GIFs), posters, figures
```

## Publish

**As its own repo** (`username.github.io/humanoids-at-home/`):
push these files to the repo root, then Settings → Pages → Deploy from branch → `main` / root.

**Inside an existing portfolio repo** (`username.github.io/humanoids-at-home/`):
copy this folder into the portfolio repo as `humanoids-at-home/` and link to it.

All paths are relative, so either works.

## Before you publish

Search `index.html` for `TODO`:

- author list and affiliation
- Paper / Code / Dataset / Slides URLs (remove buttons you don't need)
- BibTeX entry
- "Back to portfolio" link in the footer

The node shown in the attribute explorer (`main.js`, `NODE`) is an illustrative example,
labeled as such on the page. Replace it with a real record if you have one you can publish.

## Media

The source GIFs (40 MB, 10 MB, 3 MB) were converted to H.264 MP4 (about 3 MB total)
and play as muted looping videos. To re-encode a new GIF:

```
ffmpeg -i in.gif -movflags +faststart -pix_fmt yuv420p \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -crf 24 -an assets/out.mp4
```

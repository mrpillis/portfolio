# Daniel Pillis — personal site

Static Jekyll site. No theme gem, no Sass, no web fonts: one layout, one include,
and three YAML data files.

## Editing content

| What | Where |
|---|---|
| Projects (Selected work / Earlier projects) | `_data/projects.yml` — set `featured: true` to show it with a looping video at the top |
| News | `_data/news.yml` — newest first; the page shows six and folds the rest |
| Teaching | `_data/teaching.yml` |
| Intro text, bio | `index.html` |
| Header role line, nav, footer | `_layouts/default.html` |
| Contact links, analytics ID, baseurl | `_config.yml` |

## Adding project media

Don't commit raw GIFs from screen recorders (they run 5–20 MB each). Shrink them first (needs ffmpeg and gifsicle):

    tools/convert-media.sh "my clip.gif" my-project

Then reference `media: my-project.gif` in `_data/projects.yml`. A 10 MB GIF becomes
roughly 0.5–2.5 MB and still loops like the original; images only download when they
scroll into view.

## Running locally

    bundle install
    bundle exec jekyll serve

Then open http://localhost:4000/portfolio/ (matches `baseurl` in `_config.yml`).

## Deploying

GitHub Pages works as-is. If you serve from a custom domain at the root,
set `baseurl: ""` in `_config.yml` and add a `CNAME` file containing the domain.

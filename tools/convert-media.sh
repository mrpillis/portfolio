#!/usr/bin/env bash
# Shrink a GIF or video clip into the small looping GIF this site uses (needs ffmpeg + gifsicle).
#   tools/convert-media.sh path/to/clip.gif my-project
# -> assets/media/my-project.gif  (first 8 s, 10 fps, 400 px wide, lossy-compressed)
set -e
src="$1"; slug="$2"; out="$(dirname "$0")/../assets/media"
ffmpeg -nostdin -v error -y -t 8 -i "$src" -vf "fps=10,scale=400:-2:flags=lanczos,split[a][b];[a]palettegen=max_colors=128[p];[b][p]paletteuse=dither=none" /tmp/_tmp.gif
gifsicle -O3 --lossy=90 /tmp/_tmp.gif -o "$out/$slug.gif"
ls -la "$out/$slug.gif"

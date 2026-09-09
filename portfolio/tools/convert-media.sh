#!/usr/bin/env bash
# Convert a GIF or video into the small MP4 + WebP poster this site uses.
#   tools/convert-media.sh path/to/clip.gif my-project
# produces assets/media/my-project.mp4 and assets/media/my-project.webp
set -e
src="$1"; slug="$2"; out="$(dirname "$0")/../assets/media"
ffmpeg -nostdin -v error -y -i "$src" -vf "scale=640:-2:flags=lanczos,fps=15,format=yuv420p" \
  -c:v libx264 -crf 30 -preset medium -movflags +faststart -an "$out/$slug.mp4"
ffmpeg -nostdin -v error -y -i "$src" -vframes 1 -vf "scale=640:-2:flags=lanczos" -q:v 80 "$out/$slug.webp"
ls -la "$out/$slug".*

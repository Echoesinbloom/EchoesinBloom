# Echoes in Bloom — Site Files

The public-facing website. The Greenhouse is the source of truth. This is the window.

## Folder structure

```
echoes-in-bloom-site/
├── index.html        ← the homepage
├── style.css         ← all visual styling
├── main.js           ← interactions
├── netlify.toml      ← deployment config
├── photos/           ← ADD YOUR PHOTOS HERE
│   ├── field-note-1.jpg
│   ├── field-note-2.jpg
│   ├── field-note-3.jpg
│   ├── field-note-4.jpg
│   ├── field-note-5.jpg
│   └── hannah.jpg
└── README.md         ← this file
```

## Adding your photos

1. Create a `photos/` folder inside this folder
2. Add your photos named exactly as listed above
3. Or update the `src` paths in `index.html` to match your filenames

Photos can be jpg, png, or webp. Keep them under 1MB each for fast loading
(use squoosh.app to compress if needed — free, in the browser).

## Updating content

Everything you'd want to update is marked with `<!-- UPDATE: ... -->` 
comments in index.html. Search for UPDATE to find them all.

Common updates:
- **Greenhouse seeds** — swap the current incubating thoughts
- **Current curiosity** — add/remove curiosity items
- **Field notes** — swap photos and captions
- **Bloom entries** — add new essays and stories
- **Symbols** — add new symbols as they accumulate
- **About** — update the bio text
- **Season** — update "Summer 2025" to current season/year

## Deploying to Netlify

1. Create a free account at netlify.com
2. Drag this entire folder onto the Netlify dashboard
3. Point your domain at it in the Netlify settings
4. Done — site is live

## Updating after launch

When you want to change something:
1. Edit the relevant file (usually index.html)
2. If connected to GitHub: push the change, Netlify auto-deploys
3. If using drag-and-drop: drag the folder onto Netlify again

Nothing is ever lost — the real content lives in your Greenhouse folder 
in Proton Drive. This folder is just the window into it.

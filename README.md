# the glaze & the grind

A personal journal site for documenting what I'm learning through software engineering internships and ML fellowships — with a side of ceramics.

A small cartoon avatar (a Peanuts-style version of me) lives in a two-room apartment. Walk her between rooms, click in, and read what's there. No portfolio polish here on purpose — this is the working notebook, not the highlight reel.

## What's inside

- **Coding Lab** — internship logs, debugging stories, things that finally compiled, and ML fellowship notes
- **Ceramics Studio** — glaze tests, wheel notes, and any other thoughts that didn't fit anywhere else

## How it works

The avatar walks left/right with the arrow keys (or click a room directly to step inside). She has a speech bubble with a few rotating lines depending on where she's standing. Clicking her gets a random greeting.

## Files

| File | What it does |
|---|---|
| `index.html` | Page structure |
| `styles.css` | All visual styling |
| `data.js` | Journal entries (`ENTRIES.lab`, `ENTRIES.studio`) and her dialogue lines (`DIALOGUE`) |
| `app.js` | Movement, speech bubbles, room navigation logic |

## Adding a new entry

Open `data.js` and add an object to the relevant array:

```js
ENTRIES.lab.push({
  date: "Week 6",
  tag: "debugging",
  title: "Your entry title",
  body: "What happened, what you learned.",
});
```

Leave off `placeholder: true` once it's a real entry (that flag is just what shows the "replace me" dashed note on the placeholder cards)

## Notes

- The avatar is embedded directly in `app.js` as a base64 image, so there's no separate image file to keep track of.
- This is a personal journal, not a portfolio — it's meant to be messy and in-progress.

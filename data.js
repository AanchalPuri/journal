// data.js — edit the arrays below to add your own entries.
// Each entry needs: date, tag, title, body. "placeholder: true" shows the
// dashed "replace me" flag — remove that line once you've written the real entry.

const ENTRIES = {
  lab: [
    {
      date: "Week 1",
      tag: "onboarding",
      title: "First PR, terrifying and small",
      body: "Replace this with the actual story — what the ticket was, what broke, what you learned about the codebase by breaking it.",
      placeholder: true
    },
    {
      date: "Week 2",
      tag: "debugging",
      title: "The bug that was actually a race condition",
      body: "Drop in the postmortem here. What did the stack trace lie about? What finally gave it away?",
      placeholder: true
    },
    {
      date: "Week 4",
      tag: "learning",
      title: "Today I understood what a hash map actually does",
      body: "Use this slot for the 'oh, THAT'S why' moments — concepts that finally clicked mid-internship.",
      placeholder: true
    }
  ],
  studio: [
    {
      date: "Session 1",
      tag: "wheel",
      title: "Centering clay = centering attention",
      body: "Swap in your real notes — how the throw went, what the fellowship reading reminded you of, whatever connected.",
      placeholder: true
    },
    {
      date: "Session 3",
      tag: "glaze test",
      title: "Glaze test #07: too much iron oxide",
      body: "This is a great spot for ML fellowship reflections that don't fit the Lab's tone — slower, more exploratory thoughts.",
      placeholder: true
    },
    {
      date: "Session 5",
      tag: "kiln",
      title: "Three pots went in, two came out",
      body: "Use this for the 'failure as data' entries — model runs that didn't converge, glazes that crawled, the stuff you learn from anyway.",
      placeholder: true
    }
  ]
};

// Speech bubble lines, keyed by where she's standing.
const DIALOGUE = {
  home: [
    "hi! this is my little journal — i write things down here as i learn them.",
    "two rooms, two kinds of mess: code and clay.",
    "walk me around, or just click a room to peek inside."
  ],
  lab: [
    "the coding lab — internship notes live here.",
    "mostly bugs, occasionally breakthroughs.",
    "click in and i'll show you what i've been building."
  ],
  studio: [
    "the ceramics studio — also where my ML fellowship thoughts end up, oddly.",
    "slower thinking happens in here.",
    "step in and see what's on the shelf."
  ]
};

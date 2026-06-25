// data.js — edit the arrays below to add your own entries.
// Each entry needs: date, tag, title, body. "placeholder: true" shows the
// dashed "replace me" flag — remove that line once you've written the real entry.

const ENTRIES = {
  
  
  lab: [
    /*
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
    */
    {
      date: "6/22/2026",
      tag: "learning",
      title: "Implementing a Logistic Regression Model",
      body: `<p style="margin-bottom: 15px; line-height: 1.5;">
               Here is the notebook from my ML fellowship session where I built a logistic regression model from scratch. 
               I was surprised by how much I learned by implementing it myself, and how much more intuitive the math felt once I had the code to play with.
             </p>
             <iframe src="LogisticRegression.html" width="100%" height="800px" style="border:none;"></iframe>`,
      placeholder: false
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
    "the ceramics studio! don't mind the chaos, it's part of the process.",
    "slower thinking happens in here.",
    "step in and see what's on the shelf."
  ]
};

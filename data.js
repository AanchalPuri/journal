// data.js — edit the arrays below to add your own entries.
// Each entry needs: date, tag, title, body. "placeholder: true" shows the
// dashed "replace me" flag — remove that line once you've written the real entry.

const ENTRIES = {
  
  
  lab: [
    {
      date: "Jan 5–6 2026",
      tag: "onboarding",
      title: "Git, forks, and learning to write a real commit message",
      body: "Started the Sprinternship by setting up the basics — git vs. GitHub, forking, and the actual mechanics of commit → push → pull request. Learned the LIBITD-XXXX commit message format (short description, blank line, longer 2-3 line explanation, blank line, Jira ticket link). Also got introduced to Mermaid for drawing ERDs and started poking at Django and ETL concepts ahead of the real work."
    },

    {
      date: "Jan 7–9 2026",
      tag: "django",
      title: "Building the Note model, one ERD at a time",
      body: "Sketched out the relationships between Note, Group, and User before writing a single line of model code — whiteboard first, Mermaid second. Wrote the ETL command to transform the old Rails CSV exports (groups, ip_ranges, relations) into a Django fixture JSON file. Learned that .gitignore, git rm --cached, and a good git status habit before doing anything risky will save you from yourself."
    },

    {
      date: "Jan 13–14 2026",
      tag: "debugging",
      title: "Migrating notes data taught me more than the migration itself",
      body: "Spent two days converting the old single 'notes' text field into a proper multi-row Note model — splitting on ';', reformatting dates from YYYY-MM-DD into full timestamps, and mapping user initials back to actual usernames. Most of the time went into mismatched arguments and renaming things so they actually made sense (Peter's advice stuck: name things intuitively, future-you will thank you). Used r-strings so Python would stop fighting me on backslashes. The actual fix was small; finding it wasn't."
    },
    {
      date: "Jan 15–16 2026",
      tag: "django",
      title: "Tearing out the old notes field without breaking anything",
      body: "Once the new Note model was live, the cleanup step was its own adventure — removing the legacy notes column from Group, updating EditGroup/CreateGroup views, and matching the HTML templates to the model changes. Added a DeleteNoteView with its own url path. Learned git stash properly this week (stash, pull, push, checkout -b, stash pop) for moving uncommitted changes onto the right branch instead of losing them."
    },
    {
      date: "Jan 16 2026",
      tag: "auth",
      title: "Locking down forms so non-admins can't break things",
      body: "Built a SuperUserRequiredMixin and applied it across every Create/Edit/Delete view — Group, Note, Relation, IPRange — so non-superusers get redirected instead of hitting a broken form. Then edited the is_authorized function in auth.py to introduce a separate IPManager-User group: active, but not a superuser. Had to delete and rebuild the local database more than once chasing migration errors, which was annoying in the moment but made the migration history finally make sense."
    },
    
    {
      date: "June 22 2026",
      tag: "learning",
      title: "Implementing a Logistic Regression Model",
      body: `<p style="margin-bottom: 15px; line-height: 1.5;">
               Here is the notebook from my ML fellowship session where I built a logistic regression model from scratch. 
               I was surprised by how much I learned by implementing it myself, and how much more intuitive the math felt once I had the code to play with.
             </p>
             <iframe src="LogisticRegression.html" width="100%" height="800px" style="border:none;"></iframe>`,
    },

    {
      date: "June 25 2026",
      tag: "learning",
      title: "Evaluating a model & out-of-sample testing",
      body: `<p>Evaluating your model on test data is known as out-of-sample validation.</p>

            <strong>out-of-sample validation: computing evaluation metrics on data that was not used in model training process</strong>
            <p>Out of sample loss is how poorly or how well a model is performing on unseen data (basically how well is the model generalizing)</p>


            Two Criteria for Model Selection: Identify a varied set of models and apply a good out of sample evaluation technique

            <p>Model Design Dimensions:</p>
            <ul>
              <li><p>The algorithm: KNN, Decision Trees, Logistic Regression, etc.</p></li>
              <li><p>The features</p></li>
              <li><p>The hyperparameters (specific to the given algorithm)</p></li>
            </ul>
          `
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

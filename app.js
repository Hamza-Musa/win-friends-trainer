const app = document.getElementById("app");

// ===== DATA =====
const books = {
  carnegie: [
    {
      phase: "Fundamentals",
      lessons: [
        {
          title: "Don't criticize, condemn, or complain",
          stages: ["Hold back criticism", "Let someone vent", "Avoid correcting publicly"]
        },
        {
          title: "Give honest appreciation",
          stages: ["Say thank you", "Compliment effort", "Show deeper appreciation"]
        },
        {
          title: "Arouse an eager want",
          stages: ["Frame benefit", "Make it about them", "Inspire action"]
        }
      ]
    },

    {
      phase: "Likeability",
      lessons: [
        {
          title: "Become genuinely interested",
          stages: ["Ask about day", "Ask interests", "Deep convo"]
        },
        {
          title: "Smile",
          stages: ["Smile at known", "Smile first", "Smile at stranger"]
        },
        {
          title: "Remember names",
          stages: ["Use name once", "Greet by name", "Recall later"]
        },
        {
          title: "Be a good listener",
          stages: ["Don't interrupt", "Ask follow-ups", "Let them talk"]
        },
        {
          title: "Talk in their interests",
          stages: ["Ask interests", "Stay on topic", "Shift convo"]
        },
        {
          title: "Make them feel important",
          stages: ["Acknowledge", "Appreciate", "Praise publicly"]
        }
      ]
    },

    {
      phase: "Influence",
      lessons: [
        { title: "Avoid arguments", stages: ["Let it go", "Stay calm", "De-escalate"] },
        { title: "Respect opinions", stages: ["Acknowledge", "Avoid 'wrong'", "Validate"] },
        { title: "Admit when wrong", stages: ["Say my bad", "Own mistake", "Public admit"] },
        { title: "Begin friendly", stages: ["Warm tone", "Positive start", "Soft open"] },
        { title: "Get yes early", stages: ["Easy yes", "Build agreement", "Guide convo"] },
        { title: "Let them talk more", stages: ["Listen", "Speak less", "Let lead"] },
        { title: "Let them own idea", stages: ["Ask input", "Suggest lightly", "Full ownership"] },
        { title: "See their POV", stages: ["Ask why", "Understand", "Validate"] },
        { title: "Be sympathetic", stages: ["Acknowledge", "Empathize", "Deep empathy"] },
        { title: "Appeal to motives", stages: ["Frame good", "Highlight values", "Inspire"] },
        { title: "Dramatize ideas", stages: ["Example", "Story", "Engage"] },
        { title: "Throw challenge", stages: ["Suggest", "Encourage", "Push"] }
      ]
    },

    {
      phase: "Leadership",
      lessons: [
        { title: "Begin with praise", stages: ["Praise first", "Then feedback", "Public praise"] },
        { title: "Indirect mistakes", stages: ["Hint", "Guide", "Subtle correction"] },
        { title: "Talk own mistakes", stages: ["Share small", "Relate", "Be vulnerable"] },
        { title: "Ask not order", stages: ["Ask", "Offer choice", "Collaborate"] },
        { title: "Let save face", stages: ["Avoid embarrassment", "Let recover", "Change topic"] },
        { title: "Praise improvement", stages: ["Notice", "Encourage", "Celebrate"] },
        { title: "Give reputation", stages: ["Label positive", "Reinforce", "Build identity"] },
        { title: "Encourage growth", stages: ["Make easy", "Support", "Guide"] },
        { title: "Make them happy", stages: ["Frame positive", "Align goals", "Motivate"] }
      ]
    }
  ]
};

const principlesInfo = [
  {
    title: "Don't criticize, condemn, or complain",
    quote: "Any fool can criticize, condemn, and complain.",
    explanation: "Criticism puts people on the defensive.",
    real: "Even if you're right, people will resist you if they feel attacked."
  },
  {
    title: "Give honest and sincere appreciation",
    quote: "The deepest principle in human nature is the craving to be appreciated.",
    explanation: "People want recognition.",
    real: "Genuine appreciation builds connection quickly."
  },
  {
    title: "Arouse in the other person an eager want",
    quote: "Talk in terms of the other person’s interests.",
    explanation: "People care about what benefits them.",
    real: "Frame things in a way that helps them, not you."
  },
  {
    title: "Become genuinely interested in other people",
    quote: "You can make more friends by becoming interested in others.",
    explanation: "People love talking about themselves.",
    real: "Ask questions and actually care about the answers."
  },
  {
    title: "Smile",
    quote: "Your smile is a messenger of your goodwill.",
    explanation: "Energy matters more than words.",
    real: "A small smile instantly changes how you're perceived."
  },
  {
    title: "Remember names",
    quote: "A person's name is to that person the sweetest sound.",
    explanation: "Names make people feel valued.",
    real: "Use names naturally in conversation."
  },
  {
    title: "Be a good listener",
    quote: "Encourage others to talk about themselves.",
    explanation: "Listening builds trust.",
    real: "Let them talk more than you."
  },
  {
    title: "Talk in terms of the other person's interests",
    quote: "Talk in terms of the other person's interests.",
    explanation: "People engage when it's about them.",
    real: "Shift conversations toward what they enjoy."
  },
  {
    title: "Make the other person feel important",
    quote: "Make the other person feel important—and do it sincerely.",
    explanation: "Respect builds connection.",
    real: "Small acknowledgements go a long way."
  },
  {
    title: "Avoid arguments",
    quote: "The only way to win an argument is to avoid it.",
    explanation: "Arguments damage relationships.",
    real: "Winning ≠ influence."
  },
  {
    title: "Respect opinions; never say you're wrong",
    quote: "Show respect for the other person's opinions.",
    explanation: "Direct disagreement creates resistance.",
    real: "Use phrases like 'I see your point'."
  },
  {
    title: "Admit when you're wrong",
    quote: "If you're wrong, admit it quickly.",
    explanation: "Honesty builds respect.",
    real: "Owning mistakes disarms conflict."
  },
  {
    title: "Begin in a friendly way",
    quote: "Begin in a friendly way.",
    explanation: "Tone sets everything.",
    real: "Start conversations warm, not aggressive."
  },
  {
    title: "Get 'yes' early",
    quote: "Get the other person saying 'yes, yes' immediately.",
    explanation: "Agreement builds momentum.",
    real: "Start with common ground."
  },
  {
    title: "Let the other person talk more",
    quote: "Let the other person do a great deal of the talking.",
    explanation: "People enjoy expressing themselves.",
    real: "Hold back and let them lead."
  },
  {
    title: "Let them feel the idea is theirs",
    quote: "Let the other person feel that the idea is his or hers.",
    explanation: "People support what they own.",
    real: "Guide, don’t impose."
  },
  {
    title: "See things from their point of view",
    quote: "Try honestly to see things from the other person's point of view.",
    explanation: "Empathy reduces conflict.",
    real: "Understand before responding."
  },
  {
    title: "Be sympathetic",
    quote: "Be sympathetic with the other person's ideas and desires.",
    explanation: "Validation matters.",
    real: "Even if you disagree, acknowledge feelings."
  },
  {
    title: "Appeal to nobler motives",
    quote: "Appeal to the nobler motives.",
    explanation: "People like to feel good about their actions.",
    real: "Frame things in a positive light."
  },
  {
    title: "Dramatize your ideas",
    quote: "Dramatize your ideas.",
    explanation: "Emotion sticks more than logic.",
    real: "Use stories and examples."
  },
  {
    title: "Throw down a challenge",
    quote: "Throw down a challenge.",
    explanation: "People respond to challenge.",
    real: "Make things feel like a game."
  },
  {
    title: "Begin with praise",
    quote: "Begin with praise and honest appreciation.",
    explanation: "Softens criticism.",
    real: "Start positive before feedback."
  },
  {
    title: "Call out mistakes indirectly",
    quote: "Call attention to people's mistakes indirectly.",
    explanation: "Direct criticism hurts ego.",
    real: "Use subtle suggestions."
  },
  {
    title: "Talk about your own mistakes first",
    quote: "Talk about your own mistakes before criticizing.",
    explanation: "Creates humility.",
    real: "Show you're not perfect either."
  },
  {
    title: "Ask questions instead of giving orders",
    quote: "Ask questions instead of giving direct orders.",
    explanation: "People resist commands.",
    real: "Give them choice and autonomy."
  },
  {
    title: "Let them save face",
    quote: "Let the other person save face.",
    explanation: "Protecting ego maintains respect.",
    real: "Don’t embarrass people."
  },
  {
    title: "Praise improvement",
    quote: "Praise the slightest improvement.",
    explanation: "Encouragement builds growth.",
    real: "Acknowledge small wins."
  },
  {
    title: "Give a fine reputation to live up to",
    quote: "Give a fine reputation to live up to.",
    explanation: "People act according to identity.",
    real: "Label positively."
  },
  {
    title: "Encourage and make faults easy to fix",
    quote: "Make the fault seem easy to correct.",
    explanation: "Confidence removes resistance.",
    real: "Make change feel achievable."
  },
  {
    title: "Make them happy to do it",
    quote: "Make the other person happy about doing what you suggest.",
    explanation: "Motivation matters.",
    real: "Tie actions to positive outcomes."
  }
];

// ===== STATE =====
const state = JSON.parse(localStorage.getItem("progress")) || {};

function save() {
  localStorage.setItem("progress", JSON.stringify(state));
}

// ===== HOME =====
function showDashboard() {
  document.getElementById("progress").style.display = "none";

  app.innerHTML = `
    <div class="challenge">
      <h2>Start Training</h2>
      <p class="quote">"${getQuote()}"</p>
      <button onclick="showBook('carnegie')">Start</button>
    </div>
  `;
}

// ===== TRAINING =====
function showBook(bookKey) {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const phases = books[bookKey];

  phases.forEach((phaseObj, pIndex) => {
    const phaseDiv = document.createElement("div");
    phaseDiv.className = "challenge";

    const phaseTitle = document.createElement("h2");
    phaseTitle.textContent = `🔥 ${phaseObj.phase}`;
    phaseDiv.appendChild(phaseTitle);

    phaseObj.lessons.forEach((lesson, i) => {
      const lessonDiv = document.createElement("div");

      const title = document.createElement("h3");
      title.textContent = `${i + 1}. ${lesson.title}`;
      lessonDiv.appendChild(title);

      lesson.stages.forEach((stage, j) => {
        const key = `${bookKey}_${pIndex}_${i}_${j}`;

        const p = document.createElement("div");
        p.className = "stage " + (state[key] ? "completed" : "");
        p.textContent = stage;

        p.onclick = () => {
          state[key] = !state[key];
          save();
          showBook(bookKey);
        };

        lessonDiv.appendChild(p);
      });

      phaseDiv.appendChild(lessonDiv);
    });

    app.appendChild(phaseDiv);
  });

  document.getElementById("progress").style.display = "block";
  updateProgress(bookKey);
}

// ===== PROGRESS =====
function updateProgress(bookKey) {
  const allKeys = Object.keys(state).filter(k => k.startsWith(bookKey));
  const total = 30 * 3; // 30 lessons, 3 stages each

  const completed = allKeys.filter(k => state[k]).length;

  const percent = Math.floor((completed / total) * 100);

  const bar = document.getElementById("progressBar");
  bar.style.width = percent + "%";
  bar.innerText = percent + "%";
}

// ===== FAQ / LEARN =====
function showFAQ() {
  document.getElementById("progress").style.display = "none";

  let html = `
    <div class="challenge">
      <h2>📘 Learn</h2>
      <p class="quote">Tap a principle → understand it → apply it today</p>
    </div>
  `;

  principlesInfo.forEach((p, i) => {
    html += `
      <div class="challenge">
        <h3 onclick="toggleFAQ(${i})">${i + 1}. ${p.title}</h3>

        <div id="faq-${i}" class="faq-content">
          <p class="quote">"${p.quote}"</p>
          <p><strong>Why:</strong> ${p.explanation}</p>
          <p><strong>Real life:</strong> ${p.real}</p>
        </div>
      </div>
    `;
  });

  html += `<button onclick="showDashboard()">Back</button>`;

  app.innerHTML = html;
}

function toggleFAQ(i) {
  const el = document.getElementById(`faq-${i}`);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

// ===== QUOTES =====
const quotes = [
  "Any fool can criticize, condemn, and complain.",
  "You can make more friends by becoming interested in others.",
  "The only way to win an argument is to avoid it."
];

function getQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// INIT
showDashboard();
export type Principle = { title: string; quote?: string; body: string };

export const principles: Principle[] = [
  {
    title: "Start with the problem, not the solution",
    body: "Most product initiatives fail because they begin with a solution. Pain comes first, features come last. If you can't articulate the problem clearly, you're not ready to build.",
  },
  {
    title: "Outcomes over outputs",
    body: "Shipping a dashboard is an output. Cutting incident response time by 40% is an outcome. The goal is what happens after you ship — did behavior change, did the pain go away.",
  },
  {
    title: "Empowered teams make better products",
    quote: "Instead of being given a roadmap of features, an empowered team is given a problem to solve.",
    body: "I give teams problems and strategic context — not feature lists. My job is to provide direction, goals and guardrails, then trust the people closest to the data.",
  },
  {
    title: "Collaboration over consensus",
    quote: "Nothing is what happens when everyone has to agree.",
    body: "Diverse input matters, but at some point a decision needs an owner. Clear decision rights mean faster decisions and less second-guessing.",
  },
  {
    title: "Roadmaps are road signs into the fog",
    body: "We can't predict the future — only act on what we know now. I prefer Now / Next / Later roadmaps that adapt as the fog lifts.",
  },
  {
    title: "Calm teams build great products",
    body: "Urgency is sometimes unavoidable. Chronic urgency is broken. Clarity over chaos. Focus over frenzy. Sustainability over heroics.",
  },
  {
    title: "Process serves the team",
    body: "Process is a tool, not a religion. Good process reduces ambiguity and enables momentum. Bad process slows teams and kills ownership.",
  },
  {
    title: "Iterate over big bang",
    body: "Ship early. Learn fast. Break large initiatives into small, valuable releases. Iteration is advantage.",
  },
  {
    title: "The person comes first",
    body: "Products are built by people. People do their best work when they feel safe, supported and trusted. The person always matters more than the project.",
  },
];

export const summary = [
  "Start with the problem",
  "Focus on outcomes",
  "Trust teams",
  "Embrace uncertainty",
  "Prioritize clarity",
  "Collaborate openly",
  "Iterate continuously",
  "Put people first",
];

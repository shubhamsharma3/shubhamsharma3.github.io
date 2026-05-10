// Case Studies = blog-style essays / product analyses.
// These are independent of portfolio (completed work). Edit freely.
export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  topic: "AI Strategy" | "Product Design" | "Data Platforms" | "GovTech" | "Teardown";
  date: string;
  readMinutes: number;
  cover: { from: string; via: string; to: string }; // tailwind colors
  excerpt: string;
  body: string; // markdown
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "designing-vertical-ai-agents",
    title: "Designing Vertical AI Agents that Actually Ship",
    subtitle: "Why horizontal copilots stall, and what a vertical agent stack looks like in production.",
    topic: "AI Strategy",
    date: "2026-04-12",
    readMinutes: 8,
    cover: { from: "from-violet-500", via: "via-fuchsia-500", to: "to-rose-400" },
    excerpt:
      "Most enterprise AI pilots stall at the demo. Vertical agents — narrow domain, deep tools, governed memory — are the path from demo to deployment.",
    body: `## The horizontal copilot trap

Every team wants a "ChatGPT for our company." Six months later, adoption is flat and the project is paused. The reason is rarely the model. It's the lack of a **specific job to be done**.

Vertical agents flip the framing. Instead of *"answer anything,"* they ship *"do this one job exceptionally well."*

## The 4-layer stack

1. **Domain memory** — a curated knowledge layer, not a dump of PDFs.
2. **Tools, not prompts** — the agent acts via typed tool calls with audit trails.
3. **Governed reasoning** — eval suites, refusal policies, human-in-the-loop checkpoints.
4. **A surface users already use** — Slack, Outlook, the CRM. Don't build another portal.

## What changes for product

- Define **success in user outcomes**, not model metrics.
- Build the **eval** before the prototype.
- Treat **every tool call as a product surface** — version it, log it, design it.

## Closing thought

A vertical agent that does one job 95% of the time beats a horizontal copilot that does ten jobs at 60%. Pick the job. Ship the agent. Earn the next one.`,
  },
  {
    slug: "teardown-perplexity-vs-arc-search",
    title: "Teardown: Perplexity vs. Arc Search",
    subtitle: "Two takes on the post-Google answer engine — and what each gets right.",
    topic: "Teardown",
    date: "2026-03-22",
    readMinutes: 6,
    cover: { from: "from-cyan-400", via: "via-sky-500", to: "to-indigo-500" },
    excerpt:
      "Both want to replace the search box. They make very different bets on trust, speed and the role of the user.",
    body: `## The shared bet

The blue-link list is dead. Users want **answers, not destinations**.

## Where they diverge

| | Perplexity | Arc Search |
|---|---|---|
| Primary surface | Conversational | Browse-for-me |
| Trust model | Citations everywhere | Source list, but synthesis-first |
| User effort | Low (ask) | Lower (one tap) |

## What I'd steal

- From Perplexity: **citation density** as a UX habit.
- From Arc: **"do this for me"** as a verb on the home screen.

## The risk

Both products optimize for **the answer**. The web optimizes for **the source**. The product that re-balances incentive for publishers wins the long game.`,
  },
  {
    slug: "data-platforms-for-government",
    title: "Data Platforms for Government: A Practical Blueprint",
    subtitle: "How to design a lakehouse for a state department without drowning in PDFs.",
    topic: "Data Platforms",
    date: "2026-02-10",
    readMinutes: 10,
    cover: { from: "from-emerald-400", via: "via-teal-500", to: "to-cyan-500" },
    excerpt:
      "Government data is messier than enterprise data — and more consequential. A working blueprint that I keep coming back to.",
    body: `## Three constraints to design for

1. **Sovereignty** — data stays inside the state perimeter.
2. **Auditability** — every transformation must be explainable to a non-technical regulator.
3. **Longevity** — the platform outlives the team that built it.

## The blueprint

- **Bronze / Silver / Gold** with strict contracts at each layer.
- **One catalog** that is the source of truth for ownership, lineage and SLAs.
- **APIs over reports** — every gold dataset gets a typed serving API.
- **Eval over dashboards** — every KPI ships with a regression test.

## What kills these projects

Not technology — *governance fatigue*. Make governance a **product surface**, not a checklist.`,
  },
  {
    slug: "product-design-for-govtech-citizens",
    title: "Designing for Citizens, not Departments",
    subtitle: "Rewriting service flows so a first-time user can finish in one sitting.",
    topic: "Product Design",
    date: "2026-01-18",
    readMinutes: 7,
    cover: { from: "from-amber-400", via: "via-orange-500", to: "to-rose-500" },
    excerpt:
      "Most state portals are org charts in HTML form. Here's a different way to think about the citizen flow.",
    body: `## The unit of design

The unit isn't a page. It isn't a form. It's a **task a citizen is trying to finish today**.

## Three rules I keep

- **One sentence test** — describe the task in one sentence; if you can't, the flow is wrong.
- **Resume anywhere** — every step is recoverable on a different device, the next day.
- **Plain words, then policy** — explain in human language first, link to the act second.

## Outcome

When we shipped this on a state portal, completion rate on a complex form went from 11% to 63% — and the call center saw a measurable drop in repeat queries.`,
  },
  {
    slug: "ai-evals-as-a-product-surface",
    title: "Evals are the New Product Spec",
    subtitle: "Why your eval suite is more important than your prompt.",
    topic: "AI Strategy",
    date: "2025-12-05",
    readMinutes: 5,
    cover: { from: "from-indigo-500", via: "via-blue-500", to: "to-cyan-400" },
    excerpt:
      "Prompts drift. Models change. The thing that survives is the eval — and that makes it the closest thing to a spec we have.",
    body: `## The shift

In classical software, the spec is the contract. In AI software, the **eval is the contract**.

## What a good eval looks like

- **Real user inputs**, not synthetic.
- **Graded by humans first**, then by judges that match human grades.
- **Versioned and reviewed** like code.
- **Owned by product**, not just engineering.

## The product habit

Run evals on every change. Publish results internally like a build status. The team that treats evals as a first-class surface ships AI faster — and breaks it less.`,
  },
];

export const caseStudyTopics = ["All", "AI Strategy", "Product Design", "Data Platforms", "GovTech", "Teardown"] as const;

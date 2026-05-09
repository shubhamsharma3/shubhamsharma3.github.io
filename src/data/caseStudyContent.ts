// Vite glob import — eagerly load all case-study markdown as raw strings
const modules = import.meta.glob("../content/case-studies/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const byId: Record<string, string> = {};
for (const [path, content] of Object.entries(modules)) {
  const id = path.split("/").pop()!.replace(/\.md$/, "");
  byId[id] = content;
}

export const getCaseStudyMarkdown = (id: string): string | undefined => byId[id];

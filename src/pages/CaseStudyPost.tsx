import { ArrowLeft, Clock } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { caseStudies } from "@/data/caseStudies";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const CaseStudyPost = () => {
  const { slug } = useParams();
  const post = caseStudies.find((c) => c.slug === slug);
  if (!post) return <Navigate to="/case-studies" replace />;

  return (
    <ThemeProvider>
      <ScrollProgress />
      <CursorGlow />
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="pt-32">
          <article className="container mx-auto max-w-3xl px-6 pb-32">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> All case studies
            </Link>

            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-8"
            >
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <span>{post.topic}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
                <span>{formatDate(post.date)}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> {post.readMinutes} min read</span>
              </div>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
                <span className="text-gradient-primary">{post.title}</span>
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">{post.subtitle}</p>

              <div className={`relative mt-10 h-56 overflow-hidden rounded-3xl bg-gradient-to-br ${post.cover.from} ${post.cover.via} ${post.cover.to}`}>
                <div className="absolute inset-0 grid-pattern opacity-30 mix-blend-overlay" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_65%)]" />
              </div>
            </motion.header>

            <div className="prose prose-lg mt-12 max-w-none dark:prose-invert prose-headings:font-display prose-headings:tracking-tight prose-h2:mt-12 prose-h2:text-3xl prose-h3:text-xl prose-a:text-primary prose-strong:text-foreground prose-blockquote:border-l-primary prose-blockquote:text-foreground/85 prose-code:rounded prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[0.9em] prose-code:before:content-none prose-code:after:content-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
            </div>

            <div className="mt-16 rounded-2xl border border-border/60 bg-secondary/30 p-6 text-center">
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Enjoyed this?</div>
              <Link to="/case-studies" className="mt-3 inline-block font-display text-xl font-semibold text-gradient-primary">
                Read more case studies →
              </Link>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default CaseStudyPost;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Resume from "./pages/Resume.tsx";
import Philosophy from "./pages/Philosophy.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";
import CaseStudies from "./pages/CaseStudies.tsx";
import CaseStudyPost from "./pages/CaseStudyPost.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* <HashRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}> */}
      <HashRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/work/:id" element={<CaseStudy />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

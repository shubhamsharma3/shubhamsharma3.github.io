import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  FileText,
  Lightbulb,
} from "lucide-react";

import { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home", route: true },
  { href: "/#projects", label: "My Works" },
  { href: "/#experience", label: "Experience" },
  { href: "/case-studies", label: "Case Studies", route: true },
  { href: "/#contact", label: "Contact" },
];

export const Navbar = () => {
  const { theme, toggle } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const { scrollY } = useScroll();

  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  const isAboutActive =
    location.pathname === "/resume" ||
    location.pathname === "/philosophy";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 1.4,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 ${
          scrolled
            ? "glass border-border/60 shadow-card"
            : "border-transparent"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 px-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground">
            S
          </span>

          <span className="font-display font-semibold tracking-tight">
            shubham
            <span className="text-muted-foreground">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isLinkActive = l.route
              ? location.pathname === l.href
              : false;

            return l.route ? (
              <Link
                key={l.href}
                to={l.href}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors hover:bg-secondary hover:text-foreground ${
                  isLinkActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ) : (
              <HashLink
                smooth
                key={l.href}
                to={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </HashLink>
            );
          })}

          {/* About Me Dropdown */}
          <div className="group relative">
            <button
              className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors hover:bg-secondary hover:text-foreground ${
                isAboutActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              <span>👋 About Me</span>

              <ChevronDown className="h-3 w-3 opacity-70 transition-transform group-hover:rotate-180" />
            </button>

            {/* Dropdown */}
            <div className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-2">
              <div
                className="
                  pointer-events-none
                  scale-95
                  opacity-0
                  transition-all
                  duration-200
                  group-hover:pointer-events-auto
                  group-hover:scale-100
                  group-hover:opacity-100
                "
              >
                <div className="rounded-2xl border border-border/60 bg-background/95 p-2 shadow-xl backdrop-blur-xl">
                  <Link
                    to="/resume"
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-secondary ${
                      location.pathname === "/resume"
                        ? "bg-primary/5 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <FileText className="h-4 w-4 text-violet-400" />
                    <span>Résumé</span>
                  </Link>

                  <Link
                    to="/philosophy"
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-secondary ${
                      location.pathname === "/philosophy"
                        ? "bg-primary/5 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Lightbulb className="h-4 w-4 text-cyan-400" />
                    <span>Product Philosophy</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons / Actions */}
        <div className="flex items-center gap-2">
          {/* <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-border/60 transition-colors hover:bg-secondary"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button> */}

          <Button
            asChild
            size="sm"
            className="hidden rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90 md:inline-flex"
          >
            <HashLink smooth to="/#contact">
              Let's talk
            </HashLink>
          </Button>

          <button
            onClick={() => setOpen(!open)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border/60 md:hidden"
            aria-label="Menu"
          >
            {open ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-4 right-4 top-20 rounded-2xl glass p-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((l) =>
              l.route ? (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                    location.pathname === l.href
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ) : (
                <HashLink
                  smooth
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </HashLink>
              )
            )}

            {/* Mobile About */}
            <div className="mt-1 border-t border-border/20 pt-1">
              <button
                onClick={() =>
                  setMobileAboutOpen(!mobileAboutOpen)
                }
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                  isAboutActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <span>👋 About Me</span>

                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileAboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileAboutOpen && (
                <div className="mt-1 flex flex-col gap-1 pl-4">
                  <Link
                    to="/resume"
                    onClick={() => {
                      setOpen(false);
                      setMobileAboutOpen(false);
                    }}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                      location.pathname === "/resume"
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <FileText className="h-4 w-4 text-violet-400" />
                    <span>Résumé</span>
                  </Link>

                  <Link
                    to="/philosophy"
                    onClick={() => {
                      setOpen(false);
                      setMobileAboutOpen(false);
                    }}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                      location.pathname === "/philosophy"
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <Lightbulb className="h-4 w-4 text-cyan-400" />
                    <span>Product Philosophy</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
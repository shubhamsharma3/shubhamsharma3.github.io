import { motion } from "framer-motion";
import { Calendar, Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SectionHeader } from "./About";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(200),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks — I'll be in touch soon.");
      setForm({ name: "", email: "", message: "" });
    }, 900);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-60" />
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Contact" title="Let's build something." subtitle="Have a project in mind, or just want to say hi? I read everything." />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <a href="mailto:hello@shubhamjksharma.com" className="card-premium flex items-center gap-4 p-5">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-xs font-mono text-muted-foreground">Email</div>
                <div className="font-medium">hello@shubhamjksharma.com</div>
              </div>
            </a>
            <a href="#" className="card-premium flex items-center gap-4 p-5">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground"><Calendar className="h-5 w-5" /></div>
              <div>
                <div className="text-xs font-mono text-muted-foreground">Book a call</div>
                <div className="font-medium">30-min intro · Calendly</div>
              </div>
            </a>
            <div className="flex gap-2 pt-2">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="grid h-11 w-11 place-items-center rounded-xl border border-border/60 transition-colors hover:bg-secondary">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={submit}
            className="card-premium lg:col-span-3 p-6 md:p-8 space-y-4"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase text-muted-foreground">Name</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" maxLength={80} />
              </div>
              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase text-muted-foreground">Email</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@domain.com" maxLength={200} />
              </div>
            </div>
            <div>
              <label className="mb-2 block font-mono text-[11px] uppercase text-muted-foreground">Message</label>
              <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={6} placeholder="Tell me about your project…" maxLength={1000} />
            </div>
            <Button disabled={loading} className="w-full rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90" size="lg">
              {loading ? "Sending…" : <>Send message <Send className="ml-2 h-4 w-4" /></>}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

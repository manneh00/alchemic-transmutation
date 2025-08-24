"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 space-y-20">
      {/* Hero Section */}
      <motion.section
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold">
          If it works, I probably wrote it.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          I’m a full-stack engineer who builds systems that convert, scale, and
          don’t break under pressure. If your marketing stack is leaking money
          or your dev team’s moving slow, we should talk.
        </p>
        <Button asChild className="mt-6">
          <a href="#book-call">🩺 Book Your Diagnostic Call</a>
        </Button>
      </motion.section>

      {/* What I Do */}
      <motion.section
        className="max-w-3xl space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold">What I Do</h2>
        <p>
          I help companies fix performance bottlenecks, rebuild broken CMS
          pipelines, and turn dev chaos into clean, scalable systems — fast.
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Headless CMS architecture (WordPress + Contentful)</li>
          <li>
            SEO-critical frontend performance (Core Web Vitals, SSR, Hydration)
          </li>
          <li>Custom Gutenberg blocks & atomic component libraries</li>
          <li>Data-driven UI/UX tied to conversion goals</li>
          <li>Code that scales. Fast. Test-covered. Brand-compliant.</li>
        </ul>
      </motion.section>

      {/* How I Work */}
      <motion.section
        className="max-w-3xl space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold">How I Work</h2>
        <ol className="list-decimal list-inside space-y-2 pl-4">
          <li>We start with a 30‑minute diagnostic call.</li>
          <li>I audit your current system: code, CMS, SEO, speed, UX.</li>
          <li>
            You get a roadmap, next steps, and (if it's a match) an execution
            plan.
          </li>
        </ol>
        <p className="mt-2 text-sm text-muted-foreground">
          You can implement the roadmap with your team or hire me to do it.
        </p>
      </motion.section>

      {/* Proof / Case Studies */}
      <motion.section
        className="max-w-3xl space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold">Proof / Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold">Expedia</h3>
              <p>
                Built a drag-and-drop publishing engine with custom Gutenberg
                blocks. Non-devs shipping faster than devs.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold">Upstart13</h3>
              <p>
                Cut homepage load by 10%. Fixed intl/Contentful integration.
                Made the damn thing rank.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="text-xl font-bold">Freelance SEO Dev</h3>
              <p>
                Dominated local verticals. Built SEO audit tools. Delivered 400%
                conversion lifts.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        id="book-call"
        className="text-center max-w-2xl space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-lg">
          You’re losing money somewhere in your stack. I’ll help you find it,
          whether we work together or not.
        </p>
        <Button asChild>
          <a href="https://calendly.com/your-calendly-link">
            🩺 Book Your Call
          </a>
        </Button>
      </motion.section>
    </div>
  );
}

export default LandingPage;

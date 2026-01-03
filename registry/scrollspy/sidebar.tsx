"use client";

import { Scrollspy, ScrollArea } from "@soar-design/soar-react-components";
import { useRef } from "react";

export default function ScrollspySidebar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex gap-8">
      <aside className="w-56 rounded-lg border p-4">
        <h3 className="mb-4 font-semibold">On This Page</h3>
        <Scrollspy targetRef={scrollRef}>
          <nav className="space-y-1">
            <a
              href="#overview"
              data-scrollspy-anchor="overview"
              className="block border-l-2 border-transparent px-3 py-1 text-sm text-muted-foreground hover:text-foreground data-[active=true]:border-primary data-[active=true]:text-foreground"
            >
              Overview
            </a>
            <a
              href="#api"
              data-scrollspy-anchor="api"
              className="block border-l-2 border-transparent px-3 py-1 text-sm text-muted-foreground hover:text-foreground data-[active=true]:border-primary data-[active=true]:text-foreground"
            >
              API Reference
            </a>
            <a
              href="#examples"
              data-scrollspy-anchor="examples"
              className="block border-l-2 border-transparent px-3 py-1 text-sm text-muted-foreground hover:text-foreground data-[active=true]:border-primary data-[active=true]:text-foreground"
            >
              Examples
            </a>
            <a
              href="#best-practices"
              data-scrollspy-anchor="best-practices"
              className="block border-l-2 border-transparent px-3 py-1 text-sm text-muted-foreground hover:text-foreground data-[active=true]:border-primary data-[active=true]:text-foreground"
            >
              Best Practices
            </a>
          </nav>
        </Scrollspy>
      </aside>

      <ScrollArea className="h-96 flex-1 rounded-md border" viewportRef={scrollRef}>
        <article className="p-6 space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground mb-4">
              A comprehensive guide to using the component.
            </p>
            <div className="h-48" />
          </section>

          <section id="api">
            <h2 className="text-2xl font-bold mb-4">API Reference</h2>
            <p className="text-muted-foreground mb-4">
              Complete list of all available props and methods.
            </p>
            <div className="h-48" />
          </section>

          <section id="examples">
            <h2 className="text-2xl font-bold mb-4">Examples</h2>
            <p className="text-muted-foreground mb-4">
              Real-world examples and use cases.
            </p>
            <div className="h-48" />
          </section>

          <section id="best-practices">
            <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
            <p className="text-muted-foreground mb-4">
              Tips and guidelines for optimal usage.
            </p>
            <div className="h-48" />
          </section>
        </article>
      </ScrollArea>
    </div>
  );
}


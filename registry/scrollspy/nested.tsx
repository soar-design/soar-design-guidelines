"use client";

import { Scrollspy, ScrollArea } from "@soar-design/soar-react-components";
import { useRef } from "react";

export default function ScrollspyNested() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex gap-8">
      <nav className="w-48">
        <Scrollspy targetRef={scrollRef}>
          <div className="space-y-1">
            <a
              href="#getting-started"
              data-scrollspy-anchor="getting-started"
              className="block rounded px-3 py-2 text-sm font-medium hover:bg-muted data-[active=true]:text-primary"
            >
              Getting Started
            </a>
            <div className="ms-4 space-y-1">
              <a
                href="#prerequisites"
                data-scrollspy-anchor="prerequisites"
                className="block rounded px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted data-[active=true]:text-foreground"
              >
                Prerequisites
              </a>
              <a
                href="#setup"
                data-scrollspy-anchor="setup"
                className="block rounded px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted data-[active=true]:text-foreground"
              >
                Setup
              </a>
            </div>
            <a
              href="#components"
              data-scrollspy-anchor="components"
              className="block rounded px-3 py-2 text-sm font-medium hover:bg-muted data-[active=true]:text-primary"
            >
              Components
            </a>
            <div className="ms-4 space-y-1">
              <a
                href="#buttons"
                data-scrollspy-anchor="buttons"
                className="block rounded px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted data-[active=true]:text-foreground"
              >
                Buttons
              </a>
              <a
                href="#forms"
                data-scrollspy-anchor="forms"
                className="block rounded px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted data-[active=true]:text-foreground"
              >
                Forms
              </a>
            </div>
          </div>
        </Scrollspy>
      </nav>

      <ScrollArea className="h-96 flex-1 rounded-md border" viewportRef={scrollRef}>
        <div className="p-6 space-y-12">
          <section id="getting-started">
            <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
            <div className="space-y-6">
              <div id="prerequisites">
                <h3 className="text-lg font-medium mb-2">Prerequisites</h3>
                <p className="text-sm text-muted-foreground">
                  Before you begin, make sure you have Node.js installed.
                </p>
                <div className="h-32" />
              </div>
              <div id="setup">
                <h3 className="text-lg font-medium mb-2">Setup</h3>
                <p className="text-sm text-muted-foreground">
                  Run the installation command to get started.
                </p>
                <div className="h-32" />
              </div>
            </div>
          </section>

          <section id="components">
            <h2 className="text-xl font-semibold mb-4">Components</h2>
            <div className="space-y-6">
              <div id="buttons">
                <h3 className="text-lg font-medium mb-2">Buttons</h3>
                <p className="text-sm text-muted-foreground">
                  Learn about button components and their variants.
                </p>
                <div className="h-32" />
              </div>
              <div id="forms">
                <h3 className="text-lg font-medium mb-2">Forms</h3>
                <p className="text-sm text-muted-foreground">
                  Explore form components and validation.
                </p>
                <div className="h-32" />
              </div>
            </div>
          </section>
        </div>
      </ScrollArea>
    </div>
  );
}


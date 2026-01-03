"use client";

import { Scrollspy, ScrollArea } from "@soar-design/soar-react-components";
import { useRef, useState } from "react";

export default function ScrollspyWithCallback() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("intro");

  return (
    <div className="space-y-4">
      <div className="rounded-lg border p-4">
        <p className="text-sm">
          Active Section: <span className="font-semibold">{activeSection}</span>
        </p>
      </div>

      <div className="flex gap-8">
        <nav className="w-48">
          <Scrollspy targetRef={scrollRef} onUpdate={setActiveSection}>
            <div className="space-y-2">
              <a
                href="#intro"
                data-scrollspy-anchor="intro"
                className="block rounded px-3 py-2 text-sm hover:bg-muted data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              >
                Intro
              </a>
              <a
                href="#content"
                data-scrollspy-anchor="content"
                className="block rounded px-3 py-2 text-sm hover:bg-muted data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              >
                Content
              </a>
              <a
                href="#conclusion"
                data-scrollspy-anchor="conclusion"
                className="block rounded px-3 py-2 text-sm hover:bg-muted data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
              >
                Conclusion
              </a>
            </div>
          </Scrollspy>
        </nav>

        <ScrollArea className="h-80 flex-1 rounded-md border" viewportRef={scrollRef}>
          <div className="p-6 space-y-8">
            <section id="intro">
              <h2 className="text-xl font-semibold mb-3">Intro</h2>
              <p className="text-sm text-muted-foreground">Introduction content.</p>
              <div className="h-48" />
            </section>

            <section id="content">
              <h2 className="text-xl font-semibold mb-3">Content</h2>
              <p className="text-sm text-muted-foreground">Main content.</p>
              <div className="h-48" />
            </section>

            <section id="conclusion">
              <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
              <p className="text-sm text-muted-foreground">Concluding remarks.</p>
              <div className="h-48" />
            </section>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}


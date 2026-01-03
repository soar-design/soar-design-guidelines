"use client";

import { Scrollspy, ScrollArea } from "@soar-design/soar-react-components";
import { useRef } from "react";

export default function ScrollspyWithOffset() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex gap-8" dir="rtl">
      <nav className="w-48">
        <Scrollspy targetRef={scrollRef} offset={80}>
          <div className="space-y-2">
            <a
              href="#section-1"
              data-scrollspy-anchor="section-1"
              className="block rounded px-3 py-2 text-sm hover:bg-muted data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
            >
              القسم 1
            </a>
            <a
              href="#section-2"
              data-scrollspy-anchor="section-2"
              className="block rounded px-3 py-2 text-sm hover:bg-muted data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
            >
              القسم 2
            </a>
            <a
              href="#section-3"
              data-scrollspy-anchor="section-3"
              className="block rounded px-3 py-2 text-sm hover:bg-muted data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
            >
              القسم 3
            </a>
          </div>
        </Scrollspy>
      </nav>

      <div className="flex-1">
        <div className="sticky top-0 z-10 border-b bg-background p-4">
          <h3 className="font-semibold">رأس ثابت (إزاحة 80 بكسل)</h3>
        </div>
        <ScrollArea className="h-80 rounded-md border" viewportRef={scrollRef}>
          <div className="p-6 space-y-8">
            <section id="section-1">
              <h2 className="text-xl font-semibold mb-3">القسم 1</h2>
              <p className="text-sm text-muted-foreground">
                محتوى القسم 1. تأخذ الإزاحة في الاعتبار الرأس الثابت.
              </p>
              <div className="h-64" />
            </section>

            <section id="section-2">
              <h2 className="text-xl font-semibold mb-3">القسم 2</h2>
              <p className="text-sm text-muted-foreground">
                محتوى القسم 2.
              </p>
              <div className="h-64" />
            </section>

            <section id="section-3">
              <h2 className="text-xl font-semibold mb-3">القسم 3</h2>
              <p className="text-sm text-muted-foreground">
                محتوى القسم 3.
              </p>
              <div className="h-64" />
            </section>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}


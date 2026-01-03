"use client";

import { Scrollspy, ScrollArea, Progress } from "@soar-design/soar-react-components";
import { useRef, useState } from "react";

const sections = ["intro", "getting-started", "examples", "conclusion"];
const sectionLabels: Record<string, string> = {
  "intro": "مقدمة",
  "getting-started": "البدء",
  "examples": "أمثلة",
  "conclusion": "خاتمة"
};

export default function ScrollspyProgress() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("intro");

  const currentIndex = sections.indexOf(activeSection);
  const progress = ((currentIndex + 1) / sections.length) * 100;

  return (
    <div className="space-y-4" dir="rtl">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">تقدم القراءة</span>
          <span className="font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} />
      </div>

      <div className="flex gap-8">
        <nav className="w-48">
          <Scrollspy targetRef={scrollRef} onUpdate={setActiveSection}>
            <div className="space-y-2">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  data-scrollspy-anchor={section}
                  className="block rounded px-3 py-2 text-sm hover:bg-muted data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                >
                  {sectionLabels[section]}
                </a>
              ))}
            </div>
          </Scrollspy>
        </nav>

        <ScrollArea className="h-80 flex-1 rounded-md border" viewportRef={scrollRef}>
          <div className="p-6 space-y-12">
            {sections.map((section) => (
              <section key={section} id={section}>
                <h2 className="text-xl font-semibold mb-3">
                  {sectionLabels[section]}
                </h2>
                <p className="text-sm text-muted-foreground">
                  محتوى قسم {sectionLabels[section]}.
                </p>
                <div className="h-48" />
              </section>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}


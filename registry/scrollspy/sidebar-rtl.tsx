"use client";

import { Scrollspy, ScrollArea } from "@soar-design/soar-react-components";
import { useRef } from "react";

export default function ScrollspySidebar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex gap-8" dir="rtl">
      <aside className="w-56 rounded-lg border p-4">
        <h3 className="mb-4 font-semibold">في هذه الصفحة</h3>
        <Scrollspy targetRef={scrollRef}>
          <nav className="space-y-1">
            <a
              href="#overview"
              data-scrollspy-anchor="overview"
              className="block border-r-2 border-transparent px-3 py-1 text-sm text-muted-foreground hover:text-foreground data-[active=true]:border-primary data-[active=true]:text-foreground"
            >
              نظرة عامة
            </a>
            <a
              href="#api"
              data-scrollspy-anchor="api"
              className="block border-r-2 border-transparent px-3 py-1 text-sm text-muted-foreground hover:text-foreground data-[active=true]:border-primary data-[active=true]:text-foreground"
            >
              مرجع API
            </a>
            <a
              href="#examples"
              data-scrollspy-anchor="examples"
              className="block border-r-2 border-transparent px-3 py-1 text-sm text-muted-foreground hover:text-foreground data-[active=true]:border-primary data-[active=true]:text-foreground"
            >
              أمثلة
            </a>
            <a
              href="#best-practices"
              data-scrollspy-anchor="best-practices"
              className="block border-r-2 border-transparent px-3 py-1 text-sm text-muted-foreground hover:text-foreground data-[active=true]:border-primary data-[active=true]:text-foreground"
            >
              أفضل الممارسات
            </a>
          </nav>
        </Scrollspy>
      </aside>

      <ScrollArea className="h-96 flex-1 rounded-md border" viewportRef={scrollRef}>
        <article className="p-6 space-y-12">
          <section id="overview">
            <h2 className="text-2xl font-bold mb-4">نظرة عامة</h2>
            <p className="text-muted-foreground mb-4">
              دليل شامل لاستخدام المكون.
            </p>
            <div className="h-48" />
          </section>

          <section id="api">
            <h2 className="text-2xl font-bold mb-4">مرجع API</h2>
            <p className="text-muted-foreground mb-4">
              قائمة كاملة بجميع الخصائص والطرق المتاحة.
            </p>
            <div className="h-48" />
          </section>

          <section id="examples">
            <h2 className="text-2xl font-bold mb-4">أمثلة</h2>
            <p className="text-muted-foreground mb-4">
              أمثلة وحالات استخدام من العالم الحقيقي.
            </p>
            <div className="h-48" />
          </section>

          <section id="best-practices">
            <h2 className="text-2xl font-bold mb-4">أفضل الممارسات</h2>
            <p className="text-muted-foreground mb-4">
              نصائح وإرشادات للاستخدام الأمثل.
            </p>
            <div className="h-48" />
          </section>
        </article>
      </ScrollArea>
    </div>
  );
}


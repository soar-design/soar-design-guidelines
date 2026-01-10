"use client";

import { FolderCode, ArrowUpRight } from "lucide-react";

import { Button } from "@soar-design/soar-react-components";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@soar-design/soar-react-components";

export function EmptyDemoDocsRTL() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderCode />
        </EmptyMedia>
        <EmptyTitle>لا توجد مشاريع بعد</EmptyTitle>
        <EmptyDescription>
          لم تقم بإنشاء أي مشاريع بعد. ابدأ بإنشاء مشروعك الأول.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button>إنشاء مشروع</Button>
          <Button variant="outline">استيراد مشروع</Button>
        </div>
      </EmptyContent>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <a href="#">
          معرفة المزيد <ArrowUpRight />
        </a>
      </Button>
    </Empty>
  );
}

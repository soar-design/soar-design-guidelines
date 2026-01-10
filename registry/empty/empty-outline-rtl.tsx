"use client";

import { Cloud } from "lucide-react";

import { Button } from "@soar-design/soar-react-components";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@soar-design/soar-react-components";

export function EmptyOutlineDocsRTL() {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Cloud />
        </EmptyMedia>
        <EmptyTitle>التخزين السحابي فارغ</EmptyTitle>
        <EmptyDescription>
          ارفع الملفات إلى التخزين السحابي للوصول إليها من أي مكان.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          رفع الملفات
        </Button>
      </EmptyContent>
    </Empty>
  );
}

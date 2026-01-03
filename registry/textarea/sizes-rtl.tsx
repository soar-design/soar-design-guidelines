"use client";

import { Textarea } from "@soar-design/soar-react-components";

export default function TextareaSizes() {
  return (
    <div className="space-y-4" dir="rtl">
      <div className="space-y-2">
        <label className="text-sm font-medium">صغير</label>
        <Textarea variant="sm" placeholder="نص صغير" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">متوسط (افتراضي)</label>
        <Textarea variant="md" placeholder="نص متوسط" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">كبير</label>
        <Textarea variant="lg" placeholder="نص كبير" />
      </div>
    </div>
  );
}


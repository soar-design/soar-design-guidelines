"use client";

import { Textarea } from "@soar-design/soar-react-components";

export default function TextareaSizes() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Small</label>
        <Textarea variant="sm" placeholder="Small textarea" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Medium (Default)</label>
        <Textarea variant="md" placeholder="Medium textarea" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Large</label>
        <Textarea variant="lg" placeholder="Large textarea" />
      </div>
    </div>
  );
}

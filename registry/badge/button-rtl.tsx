import { BadgeButton } from "@soar-design/soar-react-components";
import { X } from "lucide-react";

export default function BadgeButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="inline-flex items-center gap-1 rounded-md border px-2.5 py-0.5 text-xs font-semibold">
        React
        <BadgeButton variant="default" onClick={() => console.log("Remove React")}>
          <X className="h-3 w-3" />
        </BadgeButton>
      </div>
      <div className="inline-flex items-center gap-1 rounded-md border px-2.5 py-0.5 text-xs font-semibold">
        TypeScript
        <BadgeButton variant="default" onClick={() => console.log("Remove TypeScript")}>
          <X className="h-3 w-3" />
        </BadgeButton>
      </div>
      <div className="inline-flex items-center gap-1 rounded-md border px-2.5 py-0.5 text-xs font-semibold">
        Next.js
        <BadgeButton variant="default" onClick={() => console.log("Remove Next.js")}>
          <X className="h-3 w-3" />
        </BadgeButton>
      </div>
    </div>
  );
}


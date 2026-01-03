import { Toggle } from "@soar-design/soar-react-components";
import { Bold } from "lucide-react";

export default function ToggleSizes() {
  return (
    <div className="flex items-center gap-2" dir="rtl">
      <Toggle size="sm" aria-label="تبديل الخط العريض">
        <Bold className="h-3.5 w-3.5" />
      </Toggle>
      <Toggle size="md" aria-label="تبديل الخط العريض">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle size="lg" aria-label="تبديل الخط العريض">
        <Bold className="h-4 w-4" />
      </Toggle>
    </div>
  );
}


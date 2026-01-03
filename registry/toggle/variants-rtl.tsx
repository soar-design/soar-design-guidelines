import { Toggle } from "@soar-design/soar-react-components";
import { Bold } from "lucide-react";

export default function ToggleVariants() {
  return (
    <div className="flex items-center gap-2" dir="rtl">
      <Toggle variant="default" aria-label="تبديل الخط العريض">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="تبديل الخط العريض">
        <Bold className="h-4 w-4" />
      </Toggle>
    </div>
  );
}


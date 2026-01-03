import { Toggle } from "@soar-design/soar-react-components";
import { Bold } from "lucide-react";

export default function ToggleDisabled() {
  return (
    <div dir="rtl">
      <Toggle disabled aria-label="تبديل الخط العريض">
        <Bold className="h-4 w-4" />
      </Toggle>
    </div>
  );
}


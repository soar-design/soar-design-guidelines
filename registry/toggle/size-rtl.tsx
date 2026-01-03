import { Toggle } from "@soar-design/soar-react-components";
import { Italic } from "lucide-react";

export default function ToggleSize() {
  return (
    <div className="flex justify-center items-center gap-5" dir="rtl">
      <Toggle size="sm" aria-label="تبديل الخط المائل">
        <Italic />
      </Toggle>
      <Toggle aria-label="تبديل الخط المائل">
        <Italic />
      </Toggle>
      <Toggle size="lg" aria-label="تبديل الخط المائل">
        <Italic />
      </Toggle>
    </div>
  );
}


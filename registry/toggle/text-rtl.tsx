import { Toggle } from "@soar-design/soar-react-components";
import { Italic } from "lucide-react";

export default function ToggleText() {
  return (
    <div dir="rtl">
      <Toggle aria-label="تبديل الخط المائل">
        <Italic />
        مائل
      </Toggle>
    </div>
  );
}


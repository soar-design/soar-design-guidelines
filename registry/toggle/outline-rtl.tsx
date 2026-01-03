import { Toggle } from "@soar-design/soar-react-components";
import { Italic } from "lucide-react";

export default function ToggleOutline() {
  return (
    <div dir="rtl">
      <Toggle variant="outline" aria-label="تبديل الخط المائل">
        <Italic />
      </Toggle>
    </div>
  );
}


import { Toggle } from "@soar-design/soar-react-components";
import { Bold } from "lucide-react";

export default function ToggleDemo() {
  return (
    <div dir="rtl">
      <Toggle aria-label="تبديل الخط العريض">
        <Bold className="h-4 w-4" />
      </Toggle>
    </div>
  );
}


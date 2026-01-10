import { Underline } from "lucide-react";

import { Toggle } from "@soar-design/soar-react-components";

export function ToggleDisabledDocsRTL() {
  return (
    <Toggle aria-label="تبديل مائل" disabled>
      <Underline className="h-4 w-4" />
    </Toggle>
  );
}

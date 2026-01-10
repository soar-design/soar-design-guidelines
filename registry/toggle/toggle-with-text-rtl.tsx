import { Italic } from "lucide-react";

import { Toggle } from "@soar-design/soar-react-components";

export function ToggleWithTextDocsRTL() {
  return (
    <Toggle aria-label="تبديل مائل">
      <Italic />
      مائل
    </Toggle>
  );
}

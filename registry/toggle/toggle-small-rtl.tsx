import { Italic } from "lucide-react";

import { Toggle } from "@soar-design/soar-react-components";

export function ToggleSmallDocsRTL() {
  return (
    <Toggle size="sm" aria-label="تبديل مائل">
      <Italic />
    </Toggle>
  );
}

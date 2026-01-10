import { Italic } from "lucide-react";

import { Toggle } from "@soar-design/soar-react-components";

export function ToggleLargeDocsRTL() {
  return (
    <Toggle size="lg" aria-label="تبديل مائل">
      <Italic />
    </Toggle>
  );
}

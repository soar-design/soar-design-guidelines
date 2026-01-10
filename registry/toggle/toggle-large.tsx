import { Italic } from "lucide-react";

import { Toggle } from "@soar-design/soar-react-components";

export function ToggleLargeDocs() {
  return (
    <Toggle size="lg" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  );
}

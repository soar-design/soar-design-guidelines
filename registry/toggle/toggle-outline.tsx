import { Italic } from "lucide-react";

import { Toggle } from "@soar-design/soar-react-components";

export function ToggleOutlineDocs() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  );
}

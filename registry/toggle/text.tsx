import { Toggle } from "@soar-design/soar-react-components";
import { Italic } from "lucide-react";

export default function ToggleText() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic />
      Italic
    </Toggle>
  );
}


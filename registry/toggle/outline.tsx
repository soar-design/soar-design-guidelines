import { Toggle } from "@soar-design/soar-react-components";
import { Italic } from "lucide-react";

export default function ToggleOutline() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  );
}


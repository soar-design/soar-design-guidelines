import { Toggle } from "@soar-design/soar-react-components";
import { Bold } from "lucide-react";

export default function ToggleDisabled() {
  return (
    <Toggle disabled aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}

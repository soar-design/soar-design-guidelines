import { Button } from "@soar-design/soar-react-components";
import { Kbd } from "@soar-design/soar-react-components";

export function KbdButtonDocs() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="outline" size="sm" className="pr-2">
        Accept <Kbd>⏎</Kbd>
      </Button>
      <Button variant="outline" size="sm" className="pr-2">
        Cancel <Kbd>Esc</Kbd>
      </Button>
    </div>
  );
}

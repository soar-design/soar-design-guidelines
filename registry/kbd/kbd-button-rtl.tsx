import { Button } from "@soar-design/soar-react-components";
import { Kbd } from "@soar-design/soar-react-components";

export function KbdButtonDocsRTL() {
  return (
    <div className="flex flex-wrap items-center gap-4" dir="rtl">
      <Button variant="outline" size="sm" className="pr-2">
        قبول <Kbd>⏎</Kbd>
      </Button>
      <Button variant="outline" size="sm" className="pr-2">
        إلغاء <Kbd>Esc</Kbd>
      </Button>
    </div>
  );
}

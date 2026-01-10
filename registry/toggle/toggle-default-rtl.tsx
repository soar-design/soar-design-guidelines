import { BookmarkIcon } from "lucide-react";

import { Toggle } from "@soar-design/soar-react-components";

export function ToggleDefaultDocsRTL() {
  return (
    <Toggle
      aria-label="تبديل إشارة مرجعية"
      size="sm"
      variant="outline"
      className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
    >
      <BookmarkIcon />
      إشارة مرجعية
    </Toggle>
  );
}

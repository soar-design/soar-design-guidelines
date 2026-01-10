import { SearchIcon } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@soar-design/soar-react-components";
import { Kbd } from "@soar-design/soar-react-components";

export function KbdInputGroupDocsRTL() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6" dir="rtl">
      <InputGroup>
        <InputGroupInput placeholder="بحث..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

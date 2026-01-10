import { MinusIcon, PlusIcon } from "lucide-react";

import { Button } from "@soar-design/soar-react-components";
import { ButtonGroup } from "@soar-design/soar-react-components";

export function ButtonGroupOrientationDocsRTL() {
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="أزرار التحكم في الوسائط"
      className="h-fit"
    >
      <Button variant="outline" size="icon">
        <PlusIcon />
      </Button>
      <Button variant="outline" size="icon">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  );
}

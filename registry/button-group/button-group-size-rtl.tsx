import { PlusIcon } from "lucide-react";

import { Button } from "@soar-design/soar-react-components";
import { ButtonGroup } from "@soar-design/soar-react-components";

export function ButtonGroupSizeDocsRTL() {
  return (
    <div className="flex flex-col items-start gap-8">
      <ButtonGroup>
        <Button variant="outline" size="sm">
          صغير
        </Button>
        <Button variant="outline" size="sm">
          زر
        </Button>
        <Button variant="outline" size="sm">
          مجموعة
        </Button>
        <Button variant="outline" size="icon-sm">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">افتراضي</Button>
        <Button variant="outline">زر</Button>
        <Button variant="outline">مجموعة</Button>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="lg">
          كبير
        </Button>
        <Button variant="outline" size="lg">
          زر
        </Button>
        <Button variant="outline" size="lg">
          مجموعة
        </Button>
        <Button variant="outline" size="icon-lg">
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}

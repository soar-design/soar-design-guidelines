import { Button } from "@soar-design/soar-react-components";
import { ButtonGroup } from "@soar-design/soar-react-components";
import { Kbd, KbdGroup } from "@soar-design/soar-react-components";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@soar-design/soar-react-components";

export function KbdTooltipDocsRTL() {
  return (
    <div className="flex flex-wrap gap-4" dir="rtl">
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="outline">
              حفظ
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              حفظ التغييرات <Kbd>S</Kbd>
            </div>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="outline">
              طباعة
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              طباعة المستند{" "}
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>P</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
}

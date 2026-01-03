import { Button } from '@soar-design/soar-react-components';
import { Kbd, KbdGroup } from '@soar-design/soar-react-components';
import { Tooltip, TooltipContent, TooltipTrigger } from '@soar-design/soar-react-components';

export default function KbdTooltip() {
  return (
    <div className="flex flex-wrap gap-2.5" dir="rtl">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="sm" variant="outline">
            حفظ
          </Button>
        </TooltipTrigger>
        <TooltipContent dir="rtl">
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
        <TooltipContent dir="rtl">
          <div className="flex items-center gap-2">
            طباعة المستند{' '}
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}


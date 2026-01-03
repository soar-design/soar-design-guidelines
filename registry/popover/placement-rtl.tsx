import { Button } from "@soar-design/soar-react-components";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@soar-design/soar-react-components";

export default function PopoverPlacement() {
  return (
    <div className="flex flex-wrap gap-4" dir="rtl">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">أعلى</Button>
        </PopoverTrigger>
        <PopoverContent side="top" align="center" dir="rtl">
          <p className="text-sm">النافذة المنبثقة موضوعة في الأعلى</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">يمين</Button>
        </PopoverTrigger>
        <PopoverContent side="right" align="center" dir="rtl">
          <p className="text-sm">النافذة المنبثقة موضوعة على اليمين</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">أسفل</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" align="center" dir="rtl">
          <p className="text-sm">النافذة المنبثقة موضوعة في الأسفل</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">يسار</Button>
        </PopoverTrigger>
        <PopoverContent side="left" align="center" dir="rtl">
          <p className="text-sm">النافذة المنبثقة موضوعة على اليسار</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}


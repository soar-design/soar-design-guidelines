import { Button } from "@soar-design/soar-react-components";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@soar-design/soar-react-components";

export default function PopoverWithAnchor() {
  return (
    <Popover>
      <div className="flex gap-4 items-center" dir="rtl">
        <PopoverTrigger asChild>
          <Button variant="outline">فتح</Button>
        </PopoverTrigger>
        <PopoverAnchor asChild>
          <div className="inline-flex h-10 items-center justify-center rounded-md border border-dashed border-input px-4 text-sm">
            عنصر المرساة
          </div>
        </PopoverAnchor>
      </div>
      <PopoverContent dir="rtl">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">نافذة منبثقة مربوطة</h4>
          <p className="text-sm text-muted-foreground">
            يتم وضع هذه النافذة المنبثقة بالنسبة لعنصر المرساة، وليس زر التفعيل.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}


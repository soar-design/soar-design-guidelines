import { Button } from "@soar-design/soar-react-components";
import { Input } from "@soar-design/soar-react-components";
import { Label } from "@soar-design/soar-react-components";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@soar-design/soar-react-components";

export function PopoverDemoDocsRTL() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">فتح النافذة المنبثقة</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" dir="rtl">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">الأبعاد</h4>
            <p className="text-muted-foreground text-sm">حدد الأبعاد للطبقة.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">العرض</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">الحد الأقصى للعرض</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">الارتفاع</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">الحد الأقصى للارتفاع</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

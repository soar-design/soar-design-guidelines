import { Badge } from '@soar-design/soar-react-components';
import { Button } from '@soar-design/soar-react-components';
import { Popover, PopoverContent, PopoverTrigger } from '@soar-design/soar-react-components';

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">إظهار النافذة المنبثقة</Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[300px] text-sm space-y-2" side="top" dir="rtl">
        {/* Title */}
        <p className="font-medium">الخطة المميزة</p>

        {/* Description */}
        <p className="text-muted-foreground">
          توفر التحليلات المتقدمة رؤى أعمق في بياناتك، بما في ذلك الاتجاهات والتنبؤات وسلوك المستخدم التفصيلي.
        </p>

        {/* Additional Note */}
        <p className="flex items-center space-x-1 rtl:space-x-reverse">
          <Badge variant="destructive" size="sm">
            ملاحظة!
          </Badge>
          <span className="text-xs text-muted-foreground">يتطلب ترقية الخطة.</span>
        </p>
      </PopoverContent>
    </Popover>
  );
}


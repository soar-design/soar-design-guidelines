import { Avatar, AvatarFallback, AvatarImage } from '@soar-design/soar-react-components';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@soar-design/soar-react-components';

export default function SelectDemo() {
  return (
    <div dir="rtl">
      <Select defaultValue="3" indicatorPosition="right">
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="اختر مستخدمًا" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-xs py-1 font-normal text-muted-foreground pe-2">اختر مستخدمًا</SelectLabel>
            <SelectItem value="1">
              <span className="flex items-center gap-2">
                <Avatar className="size-6">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/22.jpg" alt="@reui" />
                  <AvatarFallback>أح</AvatarFallback>
                </Avatar>
                <span>أحمد محمد</span>
              </span>
            </SelectItem>
            <SelectItem value="2">
              <span className="flex items-center gap-2">
                <Avatar className="size-6">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/61.jpg" alt="@reui" />
                  <AvatarFallback>فط</AvatarFallback>
                </Avatar>
                <span>فاطمة علي</span>
              </span>
            </SelectItem>
            <SelectItem value="3">
              <span className="flex items-center gap-2">
                <Avatar className="size-6">
                  <AvatarImage src="https://randomuser.me/api/portraits/women/53.jpg" alt="@reui" />
                  <AvatarFallback>خد</AvatarFallback>
                </Avatar>
                <span>خالد حسن</span>
              </span>
            </SelectItem>
            <SelectItem value="4">
              <span className="flex items-center gap-2">
                <Avatar className="size-6">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/85.jpg" alt="@reui" />
                  <AvatarFallback>سر</AvatarFallback>
                </Avatar>
                <span>سارة إبراهيم</span>
              </span>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

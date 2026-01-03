import { Input, Button } from "@soar-design/soar-react-components";
import { Search } from "lucide-react";

export default function InputWithButton() {
  return (
    <div className="space-y-4" dir="rtl">
      <div className="flex w-full max-w-sm items-center space-x-2 rtl:space-x-reverse">
        <Input type="email" placeholder="البريد الإلكتروني" />
        <Button type="submit">اشترك</Button>
      </div>
      
      <div className="flex w-full max-w-sm items-center space-x-2 rtl:space-x-reverse">
        <Input type="search" placeholder="بحث..." />
        <Button size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}


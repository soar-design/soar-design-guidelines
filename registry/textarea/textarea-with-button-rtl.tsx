import { Button } from "@soar-design/soar-react-components";
import { Textarea } from "@soar-design/soar-react-components";

export function TextareaWithButtonDocsRTL() {
  return (
    <div className="grid w-full max-w-sm gap-2" dir="rtl">
      <Textarea placeholder="اكتب رسالتك هنا." />
      <Button>إرسال الرسالة</Button>
    </div>
  );
}

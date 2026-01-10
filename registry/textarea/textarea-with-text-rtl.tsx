import { Label } from "@soar-design/soar-react-components";
import { Textarea } from "@soar-design/soar-react-components";

export function TextareaWithTextDocsRTL() {
  return (
    <div className="grid w-full max-w-sm gap-3" dir="rtl">
      <Label htmlFor="message-2">رسالتك</Label>
      <Textarea placeholder="اكتب رسالتك هنا." id="message-2" />
      <p className="text-muted-foreground text-sm">
        سيتم نسخ رسالتك إلى فريق الدعم.
      </p>
    </div>
  );
}

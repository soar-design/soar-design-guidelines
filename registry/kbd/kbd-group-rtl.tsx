import { Kbd, KbdGroup } from "@soar-design/soar-react-components";

export function KbdGroupDocsRTL() {
  return (
    <div className="flex flex-col items-center gap-4" dir="rtl">
      <p className="text-muted-foreground text-sm">
        استخدم{" "}
        <KbdGroup>
          <Kbd>Ctrl + B</Kbd>
          <Kbd>Ctrl + K</Kbd>
        </KbdGroup>{" "}
        لفتح لوحة الأوامر
      </p>
    </div>
  );
}

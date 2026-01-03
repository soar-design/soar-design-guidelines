import { Kbd, KbdGroup } from "@soar-design/soar-react-components";

export default function KbdWithGroup() {
  return (
    <div className="space-y-4" dir="rtl">
      <div className="flex items-center gap-2">
        <span className="text-sm">لوحة الأوامر:</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm">حفظ الملف:</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>S</Kbd>
        </KbdGroup>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm">تحديد الكل:</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>A</Kbd>
        </KbdGroup>
      </div>
    </div>
  );
}


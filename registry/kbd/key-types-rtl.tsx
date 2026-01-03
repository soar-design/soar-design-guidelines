import { Kbd } from "@soar-design/soar-react-components";

export default function KbdKeyTypes() {
  return (
    <div className="space-y-4" dir="rtl">
      <div>
        <p className="text-sm font-medium mb-2">مفاتيح التعديل</p>
        <div className="flex flex-wrap gap-2">
          <Kbd>⌘</Kbd>
          <Kbd>Ctrl</Kbd>
          <Kbd>Alt</Kbd>
          <Kbd>⌥</Kbd>
          <Kbd>Shift</Kbd>
          <Kbd>⇧</Kbd>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-2">مفاتيح الحروف</p>
        <div className="flex flex-wrap gap-2">
          <Kbd>A</Kbd>
          <Kbd>B</Kbd>
          <Kbd>C</Kbd>
          <Kbd>Z</Kbd>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-2">مفاتيح خاصة</p>
        <div className="flex flex-wrap gap-2">
          <Kbd>Enter</Kbd>
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd>Space</Kbd>
          <Kbd>Delete</Kbd>
          <Kbd>Backspace</Kbd>
        </div>
      </div>

      <div>
        <p className="text-sm font-medium mb-2">مفاتيح الأسهم</p>
        <div className="flex flex-wrap gap-2">
          <Kbd>↑</Kbd>
          <Kbd>↓</Kbd>
          <Kbd>←</Kbd>
          <Kbd>→</Kbd>
        </div>
      </div>
    </div>
  );
}


import { Kbd } from "@soar-design/soar-react-components";

export default function KbdInText() {
  return (
    <div className="space-y-4 max-w-2xl" dir="rtl">
      <p className="text-sm">
        لحفظ عملك، اضغط <Kbd>⌘</Kbd> <Kbd>S</Kbd> على Mac أو{" "}
        <Kbd>Ctrl</Kbd> <Kbd>S</Kbd> على Windows.
      </p>

      <p className="text-sm">
        استخدم <Kbd>Tab</Kbd> للانتقال إلى الحقل التالي و <Kbd>⇧</Kbd>{" "}
        <Kbd>Tab</Kbd> للانتقال إلى الحقل السابق.
      </p>

      <p className="text-sm">
        اضغط <Kbd>Esc</Kbd> لإغلاق هذه النافذة أو <Kbd>Enter</Kbd> لل
        تأكيد.
      </p>

      <p className="text-sm">
        انتقل عبر القائمة باستخدام مفاتيح الأسهم <Kbd>↑</Kbd> و <Kbd>↓</Kbd>.
      </p>
    </div>
  );
}


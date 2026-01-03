import { TypingText } from '@soar-design/soar-react-components';

export default function Component() {
  return (
    <div className="flex items-center justify-center" dir="rtl">
      <TypingText
        text="مرحباً، أنا رسوم متحركة لنص الكتابة!"
        className="text-2xl font-semibold"
        speed={80}
        showCursor={true}
        cursorClassName=""
      />
    </div>
  );
}


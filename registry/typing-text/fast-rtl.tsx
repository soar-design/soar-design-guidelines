import { TypingText } from '@soar-design/soar-react-components';

export default function Component() {
  return (
    <div className="flex items-center justify-center" dir="rtl">
      <TypingText
        text="⚡ رسوم متحركة للكتابة بسرعة البرق!"
        className="text-xl font-mono"
        speed={30}
        showCursor={true}
        cursor="▌"
        cursorClassName="text-yellow-500"
      />
    </div>
  );
}


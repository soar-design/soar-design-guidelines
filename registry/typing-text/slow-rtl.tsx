import { TypingText } from '@soar-design/soar-react-components';

export default function Component() {
  return (
    <div className="flex items-center justify-center" dir="rtl">
      <TypingText
        text="كتابة بطيئة وثابتة..."
        className="text-3xl font-bold text-gradient bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
        speed={300}
        delay={400}
        showCursor={true}
        cursor="●"
        cursorClassName="text-purple-500"
      />
    </div>
  );
}


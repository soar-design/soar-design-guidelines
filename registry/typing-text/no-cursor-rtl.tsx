import { TypingText } from '@soar-design/soar-react-components';

export default function Component() {
  return (
    <div className="flex items-center justify-center" dir="rtl">
      <TypingText
        text="كتابة نظيفة بدون مؤشر"
        className="text-2xl font-medium text-muted-foreground"
        speed={60}
        showCursor={false}
      />
    </div>
  );
}


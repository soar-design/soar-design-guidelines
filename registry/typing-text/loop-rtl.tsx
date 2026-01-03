import { TypingText } from '@soar-design/soar-react-components';

export default function Component() {
  return (
    <div className="flex items-center justify-center" dir="rtl">
      <TypingText
        texts={[
          'مرحباً بكم في منصتنا',
          'أنشئ مشاريع رائعة',
          'صمم تصاميم جميلة',
          'انشر بسرعة أكبر من أي وقت مضى',
        ]}
        className="text-2xl font-semibold"
        speed={100}
        loop={true}
        pauseDuration={1500}
        showCursor={true}
        cursor="_"
        cursorClassName="font-bold"
      />
    </div>
  );
}


import { TextReveal } from '@soar-design/soar-react-components';

export default function Component() {
  return (
    <div className="py-12 space-y-8" dir="rtl">
      <div>
        <TextReveal
          variant="slideUp"
          className="text-xl font-bold text-foreground"
          staggerDelay={0.06}
          delay={0}
          startOnView={false}
        >
          رسوم متحركة للانزلاق لأعلى
        </TextReveal>
      </div>

      <div>
        <TextReveal
          variant="slideDown"
          className="text-xl font-bold text-foreground"
          staggerDelay={0.04}
          delay={1.5}
          startOnView={false}
        >
          رسوم متحركة للانزلاق لأسفل
        </TextReveal>
      </div>

      <div>
        <TextReveal
          variant="slideLeft"
          className="text-xl font-bold text-foreground"
          staggerDelay={0.05}
          delay={3}
          startOnView={false}
        >
          رسوم متحركة للانزلاق لليسار
        </TextReveal>
      </div>

      <div>
        <TextReveal
          variant="slideRight"
          className="text-xl font-bold text-foreground"
          staggerDelay={0.05}
          delay={4.5}
          startOnView={false}
        >
          رسوم متحركة للانزلاق لليمين
        </TextReveal>
      </div>
    </div>
  );
}


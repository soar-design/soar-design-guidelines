import { TextReveal } from '@soar-design/soar-react-components';

export default function Component() {
  return (
    <div dir="rtl">
      <TextReveal
        variant="typewriter"
        className="text-xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent"
        staggerDelay={0.1}
      >
        سحر النار
      </TextReveal>
    </div>
  );
}


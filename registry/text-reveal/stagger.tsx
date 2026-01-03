import { TextReveal } from '@soar-design/soar-react-components';

export default function Component() {
  return (
    <div>
      <TextReveal variant="stagger" className="text-xl font-bold text-foreground py-12" staggerDelay={0.05}>
        Stagger Animation
      </TextReveal>
    </div>
  );
}


import { ShimmeringText } from "@soar-design/soar-react-components";

export default function Component() {
  return (
    <div className="flex items-center justify-center" dir="rtl">
      <ShimmeringText
        text="لون مخصص"
        className="text-2xl font-bold"
        color="var(--color-primary)"
        shimmerColor="var(--color-white)"
        duration={1.5}
        repeatDelay={1}
      />
    </div>
  );
}


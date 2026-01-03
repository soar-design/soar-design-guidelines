import { ShimmeringText } from "@soar-design/soar-react-components";

export default function ShimmeringTextMultiple() {
  return (
    <div className="space-y-6 p-8" dir="rtl">
      <ShimmeringText
        text="السطر الأول"
        delay={0}
        className="text-3xl font-bold"
      />
      <ShimmeringText
        text="السطر الثاني"
        delay={0.5}
        className="text-3xl font-bold"
      />
      <ShimmeringText
        text="السطر الثالث"
        delay={1}
        className="text-3xl font-bold"
      />
    </div>
  );
}


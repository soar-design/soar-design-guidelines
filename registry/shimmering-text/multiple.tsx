import { ShimmeringText } from "@soar-design/soar-react-components";

export default function ShimmeringTextMultiple() {
  return (
    <div className="space-y-6 p-8">
      <ShimmeringText
        text="First Line"
        delay={0}
        className="text-3xl font-bold"
      />
      <ShimmeringText
        text="Second Line"
        delay={0.5}
        className="text-3xl font-bold"
      />
      <ShimmeringText
        text="Third Line"
        delay={1}
        className="text-3xl font-bold"
      />
    </div>
  );
}


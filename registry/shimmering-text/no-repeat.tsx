import { ShimmeringText } from "@soar-design/soar-react-components";

export default function ShimmeringTextNoRepeat() {
  return (
    <div className="flex items-center justify-center p-8">
      <ShimmeringText
        text="One Time Shimmer"
        repeat={false}
        className="text-3xl font-bold"
      />
    </div>
  );
}


import { ShimmeringText } from "@soar-design/soar-react-components";

export default function ShimmeringTextNoRepeat() {
  return (
    <div className="flex items-center justify-center p-8" dir="rtl">
      <ShimmeringText
        text="تلألؤ لمرة واحدة"
        repeat={false}
        className="text-3xl font-bold"
      />
    </div>
  );
}


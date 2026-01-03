import { ShimmeringText } from "@soar-design/soar-react-components";

export default function ShimmeringTextCustomColors() {
  return (
    <div className="space-y-8" dir="rtl">
      <div>
        <p className="mb-2 text-sm text-muted-foreground">تلألؤ أزرق</p>
        <ShimmeringText
          text="تأثير تلألؤ أزرق"
          color="#3b82f6"
          shimmerColor="#60a5fa"
          className="text-2xl font-bold"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">تلألؤ بنفسجي</p>
        <ShimmeringText
          text="تأثير تلألؤ بنفسجي"
          color="#a855f7"
          shimmerColor="#c084fc"
          className="text-2xl font-bold"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">تلألؤ أخضر</p>
        <ShimmeringText
          text="تأثير تلألؤ أخضر"
          color="#22c55e"
          shimmerColor="#4ade80"
          className="text-2xl font-bold"
        />
      </div>
    </div>
  );
}


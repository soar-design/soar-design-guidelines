import { ShimmeringText } from "@soar-design/soar-react-components";

export default function ShimmeringTextDurations() {
  return (
    <div className="space-y-8" dir="rtl">
      <div>
        <p className="mb-2 text-sm text-muted-foreground">سريع (1 ثانية)</p>
        <ShimmeringText
          text="تلألؤ سريع"
          duration={1}
          className="text-2xl font-bold"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">افتراضي (2 ثانية)</p>
        <ShimmeringText
          text="سرعة عادية"
          duration={2}
          className="text-2xl font-bold"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">بطيء (4 ثواني)</p>
        <ShimmeringText
          text="تلألؤ بطيء"
          duration={4}
          className="text-2xl font-bold"
        />
      </div>
    </div>
  );
}


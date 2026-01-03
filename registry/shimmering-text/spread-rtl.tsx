import { ShimmeringText } from "@soar-design/soar-react-components";

export default function ShimmeringTextSpread() {
  return (
    <div className="space-y-8" dir="rtl">
      <div>
        <p className="mb-2 text-sm text-muted-foreground">ضيق (spread=1)</p>
        <ShimmeringText
          text="تلألؤ ضيق"
          spread={1}
          className="text-2xl font-bold"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">افتراضي (spread=2)</p>
        <ShimmeringText
          text="تلألؤ عادي"
          spread={2}
          className="text-2xl font-bold"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">واسع (spread=4)</p>
        <ShimmeringText
          text="تلألؤ واسع"
          spread={4}
          className="text-2xl font-bold"
        />
      </div>
    </div>
  );
}


import { ShimmeringText } from "@soar-design/soar-react-components";

export default function ShimmeringTextWithDelay() {
  return (
    <div className="space-y-8" dir="rtl">
      <div>
        <p className="mb-2 text-sm text-muted-foreground">بدون تأخير</p>
        <ShimmeringText
          text="بداية فورية"
          delay={0}
          className="text-2xl font-bold"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">تأخير 0.5 ثانية</p>
        <ShimmeringText
          text="بداية متأخرة"
          delay={0.5}
          className="text-2xl font-bold"
        />
      </div>
      <div>
        <p className="mb-2 text-sm text-muted-foreground">تأخير 1 ثانية</p>
        <ShimmeringText
          text="بداية لاحقة"
          delay={1}
          className="text-2xl font-bold"
        />
      </div>
    </div>
  );
}


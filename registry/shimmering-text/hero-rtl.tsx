import { ShimmeringText } from "@soar-design/soar-react-components";

export default function ShimmeringTextHero() {
  return (
    <div className="flex min-h-[400px] items-center justify-center bg-gradient-to-b from-background to-muted/20 p-8" dir="rtl">
      <div className="max-w-4xl text-center">
        <ShimmeringText
          text="أنشئ منتجات مذهلة"
          className="mb-4 text-5xl font-bold leading-tight sm:text-6xl"
          duration={3}
        />
        <p className="text-lg text-muted-foreground">
          أنشئ تجارب مستخدم رائعة مع مكتبة المكونات الخاصة بنا
        </p>
      </div>
    </div>
  );
}


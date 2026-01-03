import { CountingNumber } from "@soar-design/soar-react-components";

export default function CountingNumberDurationDelay() {
  return (
    <div className="grid gap-8 p-8 md:grid-cols-2">
      <div className="text-center">
        <CountingNumber
          from={0}
          to={100}
          duration={0.5}
          className="text-4xl font-bold"
        />
        <p className="mt-2 text-sm text-muted-foreground">سريع (0.5 ثانية)</p>
      </div>

      <div className="text-center">
        <CountingNumber
          from={0}
          to={100}
          duration={3}
          className="text-4xl font-bold"
        />
        <p className="mt-2 text-sm text-muted-foreground">بطيء (3 ثوانٍ)</p>
      </div>

      <div className="text-center">
        <CountingNumber
          from={0}
          to={100}
          duration={1.5}
          delay={0.5}
          className="text-4xl font-bold"
        />
        <p className="mt-2 text-sm text-muted-foreground">مع تأخير 0.5 ثانية</p>
      </div>

      <div className="text-center">
        <CountingNumber
          from={0}
          to={100}
          duration={1.5}
          delay={1.5}
          className="text-4xl font-bold"
        />
        <p className="mt-2 text-sm text-muted-foreground">مع تأخير 1.5 ثانية</p>
      </div>
    </div>
  );
}


import { CountingNumber } from "@soar-design/soar-react-components";

export default function CountingNumberStartOnView() {
  return (
    <div className="flex flex-col gap-16 p-8">
      <div className="text-center">
        <CountingNumber
          from={0}
          to={500}
          duration={1.5}
          startOnView={true}
          once={true}
          className="text-5xl font-bold"
        />
        <p className="mt-2 text-sm text-muted-foreground">
          يبدأ عند الظهور (مرة واحدة)
        </p>
      </div>

      <div className="text-center">
        <CountingNumber
          from={0}
          to={1000}
          duration={1.5}
          startOnView={true}
          once={false}
          className="text-5xl font-bold"
        />
        <p className="mt-2 text-sm text-muted-foreground">
          يعيد التشغيل عند التمرير (يتكرر)
        </p>
      </div>

      <div className="h-[200px]" />

      <div className="text-center">
        <CountingNumber
          from={0}
          to={750}
          duration={1.5}
          startOnView={true}
          once={true}
          inViewMargin="-20%"
          className="text-5xl font-bold"
        />
        <p className="mt-2 text-sm text-muted-foreground">
          مع هامش عرض مخصص
        </p>
      </div>
    </div>
  );
}


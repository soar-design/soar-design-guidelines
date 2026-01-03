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
          Starts when in view (once)
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
          Restarts on scroll (repeats)
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
          With custom viewport margin
        </p>
      </div>
    </div>
  );
}


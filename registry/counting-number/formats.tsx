import { CountingNumber } from "@soar-design/soar-react-components";

export default function CountingNumberFormats() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="text-center">
        <CountingNumber
          from={0}
          to={1234567}
          duration={2}
          format={(value) => value.toLocaleString()}
          className="text-4xl font-bold"
        />
        <p className="mt-2 text-sm text-muted-foreground">With Commas</p>
      </div>

      <div className="text-center">
        <CountingNumber
          from={0}
          to={99.99}
          duration={2}
          format={(value) => `$${value.toFixed(2)}`}
          className="text-4xl font-bold"
        />
        <p className="mt-2 text-sm text-muted-foreground">Currency</p>
      </div>

      <div className="text-center">
        <CountingNumber
          from={0}
          to={85}
          duration={2}
          format={(value) => `${Math.round(value)}%`}
          className="text-4xl font-bold"
        />
        <p className="mt-2 text-sm text-muted-foreground">Percentage</p>
      </div>

      <div className="text-center">
        <CountingNumber
          from={0}
          to={2.5}
          duration={2}
          format={(value) => `${value.toFixed(1)}K`}
          className="text-4xl font-bold"
        />
        <p className="mt-2 text-sm text-muted-foreground">With Suffix</p>
      </div>
    </div>
  );
}


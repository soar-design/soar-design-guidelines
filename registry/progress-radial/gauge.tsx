import { ProgressRadial } from "@soar-design/soar-react-components";

export default function ProgressRadialGauge() {
  return (
    <div className="flex items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <ProgressRadial
          value={30}
          startAngle={-180}
          endAngle={0}
          showLabel
        />
        <span className="text-xs text-muted-foreground">Semi-circle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressRadial
          value={60}
          startAngle={-135}
          endAngle={135}
          showLabel
        />
        <span className="text-xs text-muted-foreground">3/4 Circle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressRadial
          value={85}
          startAngle={-90}
          endAngle={270}
          showLabel
        />
        <span className="text-xs text-muted-foreground">Full Circle</span>
      </div>
    </div>
  );
}


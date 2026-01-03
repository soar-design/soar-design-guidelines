import { ProgressCircle } from "@soar-design/soar-react-components";

export default function ProgressCircleSizes() {
  return (
    <div className="flex items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={60} size={32} strokeWidth={3}>
          <span className="text-xs">60%</span>
        </ProgressCircle>
        <span className="text-xs text-muted-foreground">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={60} size={48} strokeWidth={4}>
          <span className="text-sm">60%</span>
        </ProgressCircle>
        <span className="text-xs text-muted-foreground">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={60} size={64} strokeWidth={5}>
          <span className="text-base">60%</span>
        </ProgressCircle>
        <span className="text-xs text-muted-foreground">Large</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={60} size={96} strokeWidth={6}>
          <span className="text-lg">60%</span>
        </ProgressCircle>
        <span className="text-xs text-muted-foreground">Extra Large</span>
      </div>
    </div>
  );
}


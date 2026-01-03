import { ProgressCircle } from "@soar-design/soar-react-components";

export default function ProgressCircleColors() {
  return (
    <div className="flex items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={80} indicatorClassName="text-green-500">
          80%
        </ProgressCircle>
        <span className="text-xs text-muted-foreground">Success</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={50} indicatorClassName="text-yellow-500">
          50%
        </ProgressCircle>
        <span className="text-xs text-muted-foreground">Warning</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ProgressCircle value={30} indicatorClassName="text-red-500">
          30%
        </ProgressCircle>
        <span className="text-xs text-muted-foreground">Danger</span>
      </div>
    </div>
  );
}


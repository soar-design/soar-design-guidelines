import { Progress } from "@soar-design/soar-react-components";

export default function ProgressSizes() {
  return (
    <div className="w-full space-y-4">
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">Small</label>
        <Progress value={45} className="h-1" indicatorClassName="bg-primary" />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">Default</label>
        <Progress value={60} indicatorClassName="bg-primary" />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">Large</label>
        <Progress value={75} className="h-3" indicatorClassName="bg-primary" />
      </div>
    </div>
  );
}


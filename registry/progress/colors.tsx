import { Progress } from "@soar-design/soar-react-components";

export default function ProgressColors() {
  return (
    <div className="w-full space-y-4">
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">Default</label>
        <Progress value={60} indicatorClassName="bg-primary" />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">Success</label>
        <Progress
          value={80}
          indicatorClassName="bg-primary"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">Warning</label>
        <Progress
          value={50}
          indicatorClassName="bg-primary"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">Danger</label>
        <Progress
          value={30}
          indicatorClassName="bg-primary"
        />
      </div>
    </div>
  );
}


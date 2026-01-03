import { Progress } from "@soar-design/soar-react-components";

export default function ProgressColors() {
  return (
    <div className="w-full space-y-4" dir="rtl">
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">افتراضي</label>
        <Progress value={60} indicatorClassName="bg-primary" />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">نجاح</label>
        <Progress
          value={80}
          indicatorClassName="bg-primary"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">تحذير</label>
        <Progress
          value={50}
          indicatorClassName="bg-primary"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">خطر</label>
        <Progress
          value={30}
          indicatorClassName="bg-primary"
        />
      </div>
    </div>
  );
}


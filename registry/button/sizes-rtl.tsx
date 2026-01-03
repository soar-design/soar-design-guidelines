import { Button } from "@soar-design/soar-react-components";
import { UserPen } from "lucide-react";

export default function ButtonDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="xs">
          صغير جداً
        </Button>
        <Button variant="outline" size="sm">
          <UserPen />
          صغير
        </Button>
        <Button variant="outline" size="md">
          <UserPen />
          متوسط
        </Button>
        <Button variant="outline" size="lg">
          <UserPen />
          كبير
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="xs" mode="icon">
          <UserPen />
        </Button>
        <Button variant="outline" size="sm" mode="icon">
          <UserPen />
        </Button>
        <Button variant="outline" mode="icon" size="md">
          <UserPen />
        </Button>
        <Button variant="outline" size="lg" mode="icon">
          <UserPen />
        </Button>
      </div>
    </div>
  );
}

import {
  Card,
  CardHeader,
  CardHeading,
  CardTitle,
  CardDescription,
  CardContent,
  CardToolbar,
  Button,
} from "@soar-design/soar-react-components";
import { MoreVertical } from "lucide-react";

export default function CardWithToolbar() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardHeading>
          <div>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>Manage your team members and their roles.</CardDescription>
          </div>
          <CardToolbar>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </CardToolbar>
        </CardHeading>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>John Doe</span>
            <span className="text-muted-foreground">Admin</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Jane Smith</span>
            <span className="text-muted-foreground">Editor</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Bob Johnson</span>
            <span className="text-muted-foreground">Viewer</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


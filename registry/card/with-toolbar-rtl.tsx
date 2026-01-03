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
            <CardTitle>أعضاء الفريق</CardTitle>
            <CardDescription>إدارة أعضاء فريقك وأدوارهم.</CardDescription>
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
            <span>أحمد محمد</span>
            <span className="text-muted-foreground">مدير</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>فاطمة علي</span>
            <span className="text-muted-foreground">محرر</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>خالد حسن</span>
            <span className="text-muted-foreground">مشاهد</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


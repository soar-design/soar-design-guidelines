import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
  Card,
  CardContent,
} from "@soar-design/soar-react-components";
import { Settings } from "lucide-react";

export default function DialogCustomTrigger() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer transition-colors hover:bg-muted">
          <CardContent className="flex items-center gap-4 p-6">
            <Settings className="h-8 w-8 text-muted-foreground" />
            <div>
              <h3 className="font-semibold">الإعدادات</h3>
              <p className="text-sm text-muted-foreground">
                قم بتكوين تفضيلاتك
              </p>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogHeader>
          <DialogTitle>الإعدادات</DialogTitle>
          <DialogDescription>
            إدارة إعدادات حسابك وتفضيلاتك.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">الإشعارات</h4>
            <p className="text-sm text-muted-foreground">
              إدارة كيفية استلام الإشعارات.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">الخصوصية</h4>
            <p className="text-sm text-muted-foreground">
              التحكم في إعدادات الخصوصية الخاصة بك.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button>حفظ التغييرات</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


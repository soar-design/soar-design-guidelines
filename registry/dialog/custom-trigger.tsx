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
              <h3 className="font-semibold">Settings</h3>
              <p className="text-sm text-muted-foreground">
                Configure your preferences
              </p>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Manage your account settings and preferences.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Notifications</h4>
            <p className="text-sm text-muted-foreground">
              Manage how you receive notifications.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Privacy</h4>
            <p className="text-sm text-muted-foreground">
              Control your privacy settings.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


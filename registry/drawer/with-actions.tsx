import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  Button,
} from "@soar-design/soar-react-components";

export default function DrawerWithActions() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Delete Account</DrawerTitle>
          <DrawerDescription>
            This action cannot be undone. This will permanently delete your
            account and remove all of your data from our servers.
          </DrawerDescription>
        </DrawerHeader>
        <div className="space-y-3 p-4">
          <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-3">
            <p className="text-sm font-medium text-destructive">
              Warning: This is permanent
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              All your projects, files, and settings will be lost forever.
            </p>
          </div>
        </div>
        <DrawerFooter className="gap-2">
          <Button variant="destructive">Yes, Delete My Account</Button>
          <Button variant="outline">Cancel</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}


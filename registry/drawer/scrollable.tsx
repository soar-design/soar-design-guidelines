import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Button,
} from "@soar-design/soar-react-components";

export default function DrawerScrollable() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Scrollable Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80vh]">
        <DrawerHeader>
          <DrawerTitle>Terms of Service</DrawerTitle>
          <DrawerDescription>
            Please read our terms of service carefully.
          </DrawerDescription>
        </DrawerHeader>
        <div className="overflow-y-auto p-4">
          <div className="space-y-4">
            <section>
              <h4 className="font-semibold">1. Introduction</h4>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </section>
            <section>
              <h4 className="font-semibold">2. User Responsibilities</h4>
              <p className="text-sm text-muted-foreground">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>
            <section>
              <h4 className="font-semibold">3. Privacy Policy</h4>
              <p className="text-sm text-muted-foreground">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </section>
            <section>
              <h4 className="font-semibold">4. Data Collection</h4>
              <p className="text-sm text-muted-foreground">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </section>
            <section>
              <h4 className="font-semibold">5. Termination</h4>
              <p className="text-sm text-muted-foreground">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </section>
            <section>
              <h4 className="font-semibold">6. Liability</h4>
              <p className="text-sm text-muted-foreground">
                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </section>
          </div>
        </div>
        <DrawerFooter>
          <Button>Accept</Button>
          <DrawerClose asChild>
            <Button variant="outline">Decline</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}


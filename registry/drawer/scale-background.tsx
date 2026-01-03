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

export default function DrawerScaleBackground() {
  return (
    <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button>Open with Scale Effect</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Scale Background</DrawerTitle>
          <DrawerDescription>
            The background content scales down when this drawer opens, creating
            a depth effect.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            This is useful for creating a sense of layering and focus on the
            drawer content.
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}


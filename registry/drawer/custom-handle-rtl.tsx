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
  Card,
  CardContent,
} from "@soar-design/soar-react-components";
import { Menu } from "lucide-react";

export default function DrawerCustomHandle() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Card className="cursor-pointer transition-colors hover:bg-muted">
          <CardContent className="flex items-center gap-4 p-6">
            <Menu className="h-8 w-8 text-muted-foreground" />
            <div>
              <h3 className="font-semibold">فتح القائمة</h3>
              <p className="text-sm text-muted-foreground">
                اضغط لرؤية الخيارات
              </p>
            </div>
          </CardContent>
        </Card>
      </DrawerTrigger>
      <DrawerContent dir="rtl">
        <DrawerHeader>
          <DrawerTitle>خيارات القائمة</DrawerTitle>
          <DrawerDescription>
            اختر إجراءً من الخيارات أدناه.
          </DrawerDescription>
        </DrawerHeader>
        <div className="space-y-2 p-4">
          <Button variant="ghost" className="w-full justify-start">
            الخيار 1
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            الخيار 2
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            الخيار 3
          </Button>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">إغلاق</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}


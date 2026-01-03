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
        <Button>فتح مع تأثير التكبير</Button>
      </DrawerTrigger>
      <DrawerContent dir="rtl">
        <DrawerHeader>
          <DrawerTitle>تكبير الخلفية</DrawerTitle>
          <DrawerDescription>
            يتم تصغير محتوى الخلفية عند فتح هذا الدرج، مما يخلق تأثير عمق.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            هذا مفيد لإنشاء إحساس بالطبقات والتركيز على محتوى الدرج.
          </p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button>إغلاق</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}


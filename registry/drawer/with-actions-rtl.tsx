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
        <Button variant="destructive">حذف الحساب</Button>
      </DrawerTrigger>
      <DrawerContent dir="rtl">
        <DrawerHeader>
          <DrawerTitle>حذف الحساب</DrawerTitle>
          <DrawerDescription>
            لا يمكن التراجع عن هذا الإجراء. سيؤدي هذا إلى حذف حسابك بشكل دائم وإزالة جميع بياناتك من خوادمنا.
          </DrawerDescription>
        </DrawerHeader>
        <div className="space-y-3 p-4">
          <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-3">
            <p className="text-sm font-medium text-destructive">
              تحذير: هذا دائم
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              سيتم فقدان جميع مشاريعك وملفاتك وإعداداتك إلى الأبد.
            </p>
          </div>
        </div>
        <DrawerFooter className="gap-2">
          <Button variant="destructive">نعم، احذف حسابي</Button>
          <Button variant="outline">إلغاء</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}


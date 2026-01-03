import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
} from "@soar-design/soar-react-components";

export default function DialogNoCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>فتح الحوار</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} dir="rtl">
        <DialogHeader>
          <DialogTitle>تأكيد الإجراء</DialogTitle>
          <DialogDescription>
            يجب عليك اختيار أحد الخيارات أدناه للمتابعة.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">إلغاء</Button>
          <Button>تأكيد</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


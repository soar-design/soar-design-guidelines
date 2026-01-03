import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@soar-design/soar-react-components";
import { Button } from "@soar-design/soar-react-components";
import { useDirection } from "@/hooks/use-direction";

export default function ConfirmationDialog() {
  const { ref, isRTL } = useDirection();

  return (
    <div ref={ref}>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">عرض الحوار</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>تأكيد إجراءك</AlertDialogTitle>
            <AlertDialogDescription>
              بمجرد التأكيد، لا يمكن عكس هذا الإجراء. سيحذف حسابك ويزيل جميع البيانات المرتبطة.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>العودة</AlertDialogCancel>
            <AlertDialogAction>المتابعة</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}


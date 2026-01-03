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
  Button,
} from "@soar-design/soar-react-components";

export default function AlertDialogCustomActions() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">فتح حوار مخصص</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>حفظ التغييرات؟</AlertDialogTitle>
          <AlertDialogDescription>
            لديك تغييرات غير محفوظة. هل تريد حفظها قبل المغادرة؟
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>تجاهل</AlertDialogCancel>
          <AlertDialogAction variant="outline">حفظ كمسودة</AlertDialogAction>
          <AlertDialogAction variant="primary">حفظ ونشر</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}


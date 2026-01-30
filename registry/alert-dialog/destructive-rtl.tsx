import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { Button } from "@soar-design/soar-react-components"
import { Trash2Icon } from "lucide-react"

export function AlertDialogDestructive() {
  return (
    <DirectionProvider dir="rtl">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">حذف المحادثة</Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
              <Trash2Icon />
            </AlertDialogMedia>
            <AlertDialogTitle>حذف المحادثة؟</AlertDialogTitle>
            <AlertDialogDescription>
              سيتم حذف محادثة الدردشة هذه نهائيًا. عرض{" "}
              <a href="#">الإعدادات</a> لحذف أي ذكريات محفوظة أثناء هذه المحادثة.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="outline">إلغاء</AlertDialogCancel>
            <AlertDialogAction variant="destructive">حذف</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DirectionProvider>
  )
}

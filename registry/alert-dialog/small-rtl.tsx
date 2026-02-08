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
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { Button } from "@soar-design/soar-react-components"

export function AlertDialogSmall() {
  return (
    <DirectionProvider dir="rtl">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="secondary">عرض الحوار</Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>السماح للملحق بالاتصال؟</AlertDialogTitle>
            <AlertDialogDescription>
              هل تريد السماح لملحق USB بالاتصال بهذا الجهاز؟
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>عدم السماح</AlertDialogCancel>
            <AlertDialogAction>السماح</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DirectionProvider>
  )
}

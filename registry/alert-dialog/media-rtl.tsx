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
import { CircleFadingPlusIcon } from "lucide-react"

export function AlertDialogWithMedia() {
  return (
    <DirectionProvider dir="rtl">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="secondary">مشاركة المشروع</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <CircleFadingPlusIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>مشاركة هذا المشروع؟</AlertDialogTitle>
            <AlertDialogDescription>
              أي شخص لديه الرابط سيكون قادرًا على عرض وتعديل هذا المشروع.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>إلغاء</AlertDialogCancel>
            <AlertDialogAction>مشاركة</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DirectionProvider>
  )
}

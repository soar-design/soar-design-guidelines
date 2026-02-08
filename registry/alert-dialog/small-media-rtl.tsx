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
import { BluetoothIcon } from "lucide-react"

export function AlertDialogSmallWithMedia() {
  return (
    <DirectionProvider dir="rtl">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="secondary">عرض الحوار</Button>
        </AlertDialogTrigger>

        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogMedia>
              <BluetoothIcon />
            </AlertDialogMedia>
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

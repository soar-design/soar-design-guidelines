import { Badge, DirectionProvider } from "@soar-design/soar-react-components"

export function BadgeCustomColors() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex w-full max-w-lg flex-wrap justify-center gap-2">
        <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          أزرق
        </Badge>
        <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
          أخضر
        </Badge>
        <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
          سماوي
        </Badge>
        <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
          بنفسجي
        </Badge>
        <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
          أحمر
        </Badge>
      </div>
    </DirectionProvider>
  )
}

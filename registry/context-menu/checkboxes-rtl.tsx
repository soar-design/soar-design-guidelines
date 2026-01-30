import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"

export function ContextMenuCheckboxes() {
  return (
    <DirectionProvider dir="rtl">
      <ContextMenu>
        <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="hidden pointer-fine:inline-block">
            انقر بزر الماوس الأيمن هنا
          </span>
          <span className="hidden pointer-coarse:inline-block">
            اضغط مطولاً هنا
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuGroup>
            <ContextMenuCheckboxItem defaultChecked>
              إظهار شريط الإشارات المرجعية
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>إظهار عناوين URL الكاملة</ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem defaultChecked>
              إظهار أدوات المطور
            </ContextMenuCheckboxItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </DirectionProvider>
  )
}

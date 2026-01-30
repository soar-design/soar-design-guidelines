import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import {
  ClipboardPaste,
  Copy,
  Scissors,
  Trash,
} from "lucide-react"

export function ContextMenuIcons() {
  return (
    <DirectionProvider dir="ltr">
      <ContextMenu>
        <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="hidden pointer-fine:inline-block">
            Right click here
          </span>
          <span className="hidden pointer-coarse:inline-block">
            Long press here
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuGroup>
            <ContextMenuItem>
              <Copy className="h-4 w-4" />
              Copy
            </ContextMenuItem>
            <ContextMenuItem>
              <Scissors className="h-4 w-4" />
              Cut
            </ContextMenuItem>
            <ContextMenuItem>
              <ClipboardPaste className="h-4 w-4" />
              Paste
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem variant="destructive">
              <Trash className="h-4 w-4" />
              Delete
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </DirectionProvider>
  )
}

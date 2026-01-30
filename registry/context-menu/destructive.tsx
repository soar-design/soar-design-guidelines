import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { Pencil, Share, Trash } from "lucide-react"

export function ContextMenuDestructive() {
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
              <Pencil className="h-4 w-4" />
              Edit
            </ContextMenuItem>
            <ContextMenuItem>
              <Share className="h-4 w-4" />
              Share
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

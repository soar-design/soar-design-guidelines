import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@soar-design/soar-react-components";
import { Copy, Download, FileText, Share, Trash } from "lucide-react";

export default function CommandWithShortcuts() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>
            <FileText className="me-2 h-4 w-4" />
            <span>New File</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Copy className="me-2 h-4 w-4" />
            <span>Copy</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Share className="me-2 h-4 w-4" />
            <span>Share</span>
            <CommandShortcut>⌘⇧S</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Download className="me-2 h-4 w-4" />
            <span>Download</span>
            <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Trash className="me-2 h-4 w-4" />
            <span>Delete</span>
            <CommandShortcut>⌘⌫</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}


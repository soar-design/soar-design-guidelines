import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@soar-design/soar-react-components";
import { File, Folder, Search, Settings } from "lucide-react";

export default function CommandWithGroups() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Files">
          <CommandItem>
            <File className="me-2 h-4 w-4" />
            <span>Document.pdf</span>
          </CommandItem>
          <CommandItem>
            <File className="me-2 h-4 w-4" />
            <span>Presentation.pptx</span>
          </CommandItem>
          <CommandItem>
            <Folder className="me-2 h-4 w-4" />
            <span>Projects</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>
            <Search className="me-2 h-4 w-4" />
            <span>Search Files</span>
          </CommandItem>
          <CommandItem>
            <Settings className="me-2 h-4 w-4" />
            <span>Preferences</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}


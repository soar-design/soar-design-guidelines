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
      <CommandInput placeholder="بحث..." />
      <CommandList>
        <CommandEmpty>لم يتم العثور على نتائج.</CommandEmpty>
        <CommandGroup heading="الملفات">
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
            <span>المشاريع</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="الإجراءات">
          <CommandItem>
            <Search className="me-2 h-4 w-4" />
            <span>البحث عن الملفات</span>
          </CommandItem>
          <CommandItem>
            <Settings className="me-2 h-4 w-4" />
            <span>التفضيلات</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}


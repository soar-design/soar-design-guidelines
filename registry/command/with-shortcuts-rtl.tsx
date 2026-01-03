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
      <CommandInput placeholder="اكتب أمرًا..." />
      <CommandList>
        <CommandEmpty>لم يتم العثور على نتائج.</CommandEmpty>
        <CommandGroup heading="الإجراءات">
          <CommandItem>
            <FileText className="me-2 h-4 w-4" />
            <span>ملف جديد</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Copy className="me-2 h-4 w-4" />
            <span>نسخ</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Share className="me-2 h-4 w-4" />
            <span>مشاركة</span>
            <CommandShortcut>⌘⇧S</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Download className="me-2 h-4 w-4" />
            <span>تحميل</span>
            <CommandShortcut>⌘D</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Trash className="me-2 h-4 w-4" />
            <span>حذف</span>
            <CommandShortcut>⌘⌫</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}


"use client"

import * as React from "react"
import {
  Button,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import {
  Bell,
  Calculator,
  Calendar,
  ClipboardPaste,
  Code,
  Copy,
  CreditCard,
  FileText,
  Folder,
  FolderPlus,
  HelpCircle,
  Home,
  Image,
  Inbox,
  LayoutGrid,
  List,
  Plus,
  Scissors,
  Settings,
  Trash,
  User,
  ZoomIn,
  ZoomOut,
} from "lucide-react"

export function CommandManyItems() {
  const [open, setOpen] = React.useState(false)

  return (
    <DirectionProvider dir="rtl">
      <div className="flex flex-col gap-4">
        <Button onClick={() => setOpen(true)} variant="secondary" className="w-fit">
          فتح القائمة
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="اكتب أمرًا أو ابحث..." />
            <CommandList>
              <CommandEmpty>لم يتم العثور على نتائج.</CommandEmpty>
              <CommandGroup heading="التنقل">
                <CommandItem>
                  <Home className="h-4 w-4" />
                  <span>الرئيسية</span>
                  <CommandShortcut>⌘H</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Inbox className="h-4 w-4" />
                  <span>صندوق الوارد</span>
                  <CommandShortcut>⌘I</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <FileText className="h-4 w-4" />
                  <span>المستندات</span>
                  <CommandShortcut>⌘D</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Folder className="h-4 w-4" />
                  <span>المجلدات</span>
                  <CommandShortcut>⌘F</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="الإجراءات">
                <CommandItem>
                  <Plus className="h-4 w-4" />
                  <span>ملف جديد</span>
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <FolderPlus className="h-4 w-4" />
                  <span>مجلد جديد</span>
                  <CommandShortcut>⇧⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Copy className="h-4 w-4" />
                  <span>نسخ</span>
                  <CommandShortcut>⌘C</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Scissors className="h-4 w-4" />
                  <span>قص</span>
                  <CommandShortcut>⌘X</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <ClipboardPaste className="h-4 w-4" />
                  <span>لصق</span>
                  <CommandShortcut>⌘V</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Trash className="h-4 w-4" />
                  <span>حذف</span>
                  <CommandShortcut>⌫</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="العرض">
                <CommandItem>
                  <LayoutGrid className="h-4 w-4" />
                  <span>عرض الشبكة</span>
                </CommandItem>
                <CommandItem>
                  <List className="h-4 w-4" />
                  <span>عرض القائمة</span>
                </CommandItem>
                <CommandItem>
                  <ZoomIn className="h-4 w-4" />
                  <span>تكبير</span>
                  <CommandShortcut>⌘+</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <ZoomOut className="h-4 w-4" />
                  <span>تصغير</span>
                  <CommandShortcut>⌘-</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="الحساب">
                <CommandItem>
                  <User className="h-4 w-4" />
                  <span>الملف الشخصي</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard className="h-4 w-4" />
                  <span>الفواتير</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings className="h-4 w-4" />
                  <span>الإعدادات</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Bell className="h-4 w-4" />
                  <span>الإشعارات</span>
                </CommandItem>
                <CommandItem>
                  <HelpCircle className="h-4 w-4" />
                  <span>المساعدة والدعم</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="الأدوات">
                <CommandItem>
                  <Calculator className="h-4 w-4" />
                  <span>الآلة الحاسبة</span>
                </CommandItem>
                <CommandItem>
                  <Calendar className="h-4 w-4" />
                  <span>التقويم</span>
                </CommandItem>
                <CommandItem>
                  <Image className="h-4 w-4" />
                  <span>محرر الصور</span>
                </CommandItem>
                <CommandItem>
                  <Code className="h-4 w-4" />
                  <span>محرر الكود</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    </DirectionProvider>
  )
}

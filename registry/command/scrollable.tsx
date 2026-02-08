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
    <DirectionProvider dir="ltr">
      <div className="flex flex-col gap-4">
        <Button onClick={() => setOpen(true)} variant="secondary" className="w-fit">
          Open Menu
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Navigation">
                <CommandItem>
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                  <CommandShortcut>⌘H</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Inbox className="h-4 w-4" />
                  <span>Inbox</span>
                  <CommandShortcut>⌘I</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <FileText className="h-4 w-4" />
                  <span>Documents</span>
                  <CommandShortcut>⌘D</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Folder className="h-4 w-4" />
                  <span>Folders</span>
                  <CommandShortcut>⌘F</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Actions">
                <CommandItem>
                  <Plus className="h-4 w-4" />
                  <span>New File</span>
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <FolderPlus className="h-4 w-4" />
                  <span>New Folder</span>
                  <CommandShortcut>⇧⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Copy className="h-4 w-4" />
                  <span>Copy</span>
                  <CommandShortcut>⌘C</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Scissors className="h-4 w-4" />
                  <span>Cut</span>
                  <CommandShortcut>⌘X</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <ClipboardPaste className="h-4 w-4" />
                  <span>Paste</span>
                  <CommandShortcut>⌘V</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Trash className="h-4 w-4" />
                  <span>Delete</span>
                  <CommandShortcut>⌫</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="View">
                <CommandItem>
                  <LayoutGrid className="h-4 w-4" />
                  <span>Grid View</span>
                </CommandItem>
                <CommandItem>
                  <List className="h-4 w-4" />
                  <span>List View</span>
                </CommandItem>
                <CommandItem>
                  <ZoomIn className="h-4 w-4" />
                  <span>Zoom In</span>
                  <CommandShortcut>⌘+</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <ZoomOut className="h-4 w-4" />
                  <span>Zoom Out</span>
                  <CommandShortcut>⌘-</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Account">
                <CommandItem>
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard className="h-4 w-4" />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                </CommandItem>
                <CommandItem>
                  <HelpCircle className="h-4 w-4" />
                  <span>Help & Support</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Tools">
                <CommandItem>
                  <Calculator className="h-4 w-4" />
                  <span>Calculator</span>
                </CommandItem>
                <CommandItem>
                  <Calendar className="h-4 w-4" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Image className="h-4 w-4" />
                  <span>Image Editor</span>
                </CommandItem>
                <CommandItem>
                  <Code className="h-4 w-4" />
                  <span>Code Editor</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    </DirectionProvider>
  )
}

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
  CommandShortcut,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { CreditCard, Settings, User } from "lucide-react"

export function CommandWithShortcuts() {
  const [open, setOpen] = React.useState(false)

  return (
    <DirectionProvider dir="ltr">
      <div className="flex flex-col gap-4">
        <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
          Open Menu
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Settings">
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
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    </DirectionProvider>
  )
}

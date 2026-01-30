"use client"

import * as React from "react"
import {
  Button,
  DirectionProvider,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@soar-design/soar-react-components"
import { BellIcon, MailIcon, MessageSquareIcon } from "lucide-react"

export function DropdownMenuCheckboxesIcons() {
  const [notifications, setNotifications] = React.useState({
    email: true,
    sms: false,
    push: true,
  })

  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Notifications</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Notification Preferences</DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={notifications.email}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, email: checked === true })
                }
              >
                <MailIcon />
                Email notifications
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={notifications.sms}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, sms: checked === true })
                }
              >
                <MessageSquareIcon />
                SMS notifications
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={notifications.push}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, push: checked === true })
                }
              >
                <BellIcon />
                Push notifications
              </DropdownMenuCheckboxItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </DirectionProvider>
  )
}

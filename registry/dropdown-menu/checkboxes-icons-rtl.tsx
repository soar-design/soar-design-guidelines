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
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">الإشعارات</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuLabel>تفضيلات الإشعارات</DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={notifications.email}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, email: checked === true })
                }
              >
                <MailIcon />
                إشعارات البريد الإلكتروني
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={notifications.sms}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, sms: checked === true })
                }
              >
                <MessageSquareIcon />
                إشعارات الرسائل النصية
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={notifications.push}
                onCheckedChange={(checked) =>
                  setNotifications({ ...notifications, push: checked === true })
                }
              >
                <BellIcon />
                الإشعارات الفورية
              </DropdownMenuCheckboxItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </DirectionProvider>
  )
}

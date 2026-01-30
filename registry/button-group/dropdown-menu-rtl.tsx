"use client"

import {
  Button,
  ButtonGroup,
  DirectionProvider,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@soar-design/soar-react-components"
import {
  AlertTriangleIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-react"

export function ButtonGroupDropdown() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <ButtonGroup>
          <Button variant="outline">متابعة</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="!pl-2">
                <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <VolumeOffIcon />
                  كتم المحادثة
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CheckIcon />
                  تعليم كمقروء
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <AlertTriangleIcon />
                  الإبلاغ عن المحادثة
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UserRoundXIcon />
                  حظر المستخدم
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ShareIcon />
                  مشاركة المحادثة
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CopyIcon />
                  نسخ المحادثة
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                  <TrashIcon />
                  حذف المحادثة
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}

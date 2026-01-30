"use client"

import * as React from "react"
import {
  Button,
  ButtonGroup,
  DirectionProvider,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@soar-design/soar-react-components"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react"

export function ButtonGroupDemo() {
  const [label, setLabel] = React.useState("personal")

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <ButtonGroup>
          <ButtonGroup className="hidden sm:flex">
            <Button variant="outline" size="icon" aria-label="رجوع">
              <ArrowLeftIcon />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline">أرشفة</Button>
            <Button variant="outline">إبلاغ</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline">تأجيل</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" aria-label="خيارات أكثر">
                  <MoreHorizontalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <MailCheckIcon />
                    تعليم كمقروء
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ArchiveIcon />
                    أرشفة
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <ClockIcon />
                    تأجيل
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CalendarPlusIcon />
                    إضافة إلى التقويم
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ListFilterIcon />
                    إضافة إلى القائمة
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <TagIcon />
                      تصنيف كـ...
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuRadioGroup
                        value={label}
                        onValueChange={setLabel}
                      >
                        <DropdownMenuRadioItem value="personal">
                          شخصي
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="work">
                          عمل
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="other">
                          آخر
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem variant="destructive">
                    <Trash2Icon />
                    سلة المهملات
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}

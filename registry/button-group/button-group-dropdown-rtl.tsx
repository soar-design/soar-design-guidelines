"use client";

import {
  AlertTriangleIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-react";

import { Button } from "@soar-design/soar-react-components";
import { ButtonGroup } from "@soar-design/soar-react-components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@soar-design/soar-react-components";

export function ButtonGroupDropdownDocsRTL() {
  return (
    <ButtonGroup>
      <Button variant="outline">متابعة</Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="!pl-2">
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="[--radius:1rem]">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <VolumeOffIcon />
              كتم المحادثة
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CheckIcon />
              وضع علامة كمقروء
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
  );
}

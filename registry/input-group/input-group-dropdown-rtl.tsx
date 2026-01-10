"use client";

import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@soar-design/soar-react-components";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@soar-design/soar-react-components";

export function InputGroupDropdownDocsRTL() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="بحث..." />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost">
                تصفية
                <ChevronDown />
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>الكل</DropdownMenuItem>
              <DropdownMenuItem>حديث</DropdownMenuItem>
              <DropdownMenuItem>مؤرشف</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost">
                +966
                <ChevronDown />
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>+966</DropdownMenuItem>
              <DropdownMenuItem>+971</DropdownMenuItem>
              <DropdownMenuItem>+20</DropdownMenuItem>
              <DropdownMenuItem>+1</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
        <InputGroupInput placeholder="رقم الهاتف" />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="example.com" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost">
                .com
                <ChevronDown />
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>.com</DropdownMenuItem>
              <DropdownMenuItem>.org</DropdownMenuItem>
              <DropdownMenuItem>.net</DropdownMenuItem>
              <DropdownMenuItem>.io</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

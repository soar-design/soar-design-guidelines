"use client";

import * as React from "react";
import { Check, Copy, Info, Star } from "lucide-react";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@soar-design/soar-react-components";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@soar-design/soar-react-components";

export function InputGroupButtonDocsRTL() {
  const { copy } = useCopyToClipboard();

  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="https://example.com" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            variant="ghost"
            size="icon-xs"
            onClick={() => copy("https://example.com")}
          >
            <Copy />
            <span className="sr-only">نسخ</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="بحث..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="default">بحث</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="أدخل الرابط" />
        <InputGroupAddon align="inline-end">
          <Popover>
            <PopoverTrigger asChild>
              <InputGroupButton variant="ghost" size="icon-xs">
                <Info />
                <span className="sr-only">معلومات</span>
              </InputGroupButton>
            </PopoverTrigger>
            <PopoverContent>هذا حقل إدخال رابط.</PopoverContent>
          </Popover>
          <InputGroupButton variant="ghost" size="icon-xs">
            <Star />
            <span className="sr-only">مفضلة</span>
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs">
            <Check />
            <span className="sr-only">متحقق</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

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

export function InputGroupButtonDocs() {
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="https://example.com" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            variant="ghost"
            size="icon-xs"
            onClick={() => copyToClipboard("https://example.com")}
          >
            <Copy />
            <span className="sr-only">Copy</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="default">Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter URL" />
        <InputGroupAddon align="inline-end">
          <Popover>
            <PopoverTrigger asChild>
              <InputGroupButton variant="ghost" size="icon-xs">
                <Info />
                <span className="sr-only">Info</span>
              </InputGroupButton>
            </PopoverTrigger>
            <PopoverContent>This is a URL input field.</PopoverContent>
          </Popover>
          <InputGroupButton variant="ghost" size="icon-xs">
            <Star />
            <span className="sr-only">Favorite</span>
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs">
            <Check />
            <span className="sr-only">Verified</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

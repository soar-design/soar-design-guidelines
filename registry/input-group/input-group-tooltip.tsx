"use client";

import { Info } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@soar-design/soar-react-components";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@soar-design/soar-react-components";

export function InputGroupTooltipDocs() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="example.com" className="!pl-1" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton className="rounded-full" size="icon-xs">
                <Info />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>This is content in a tooltip.</TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter your email" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton variant="ghost" size="icon-xs">
                <Info />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              We&apos;ll never share your email with anyone else.
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

"use client"

import * as React from "react"
import {
  Button,
  ButtonGroup,
  DirectionProvider,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@soar-design/soar-react-components"
import { AudioLinesIcon, PlusIcon } from "lucide-react"

export function ButtonGroupInputGroup() {
  const [voiceEnabled, setVoiceEnabled] = React.useState(false)

  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <ButtonGroup className="[--radius:9999rem]">
          <ButtonGroup>
            <Button variant="secondary" size="icon">
              <PlusIcon />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <InputGroup>
              <InputGroupInput
                placeholder={
                  voiceEnabled ? "Record and send audio..." : "Send a message..."
                }
                disabled={voiceEnabled}
              />
              <InputGroupAddon align="inline-end">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <InputGroupButton
                      onClick={() => setVoiceEnabled(!voiceEnabled)}
                      size="icon-xs"
                      data-active={voiceEnabled}
                      className="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                      aria-pressed={voiceEnabled}
                    >
                      <AudioLinesIcon />
                    </InputGroupButton>
                  </TooltipTrigger>
                  <TooltipContent>Voice Mode</TooltipContent>
                </Tooltip>
              </InputGroupAddon>
            </InputGroup>
          </ButtonGroup>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}

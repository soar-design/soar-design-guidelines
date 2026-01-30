import {
  Button,
  ButtonGroup,
  DirectionProvider,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@soar-design/soar-react-components"
import { AudioLinesIcon, PlusIcon } from "lucide-react"

export function ButtonGroupNested() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <ButtonGroup>
          <ButtonGroup>
            <Button variant="outline" size="icon">
              <PlusIcon />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <InputGroup>
              <InputGroupInput placeholder="Send a message..." />
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupAddon align="inline-end">
                    <AudioLinesIcon />
                  </InputGroupAddon>
                </TooltipTrigger>
                <TooltipContent>Voice Mode</TooltipContent>
              </Tooltip>
            </InputGroup>
          </ButtonGroup>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}

import {
  Button,
  ButtonGroup,
  DirectionProvider,
  Field,
  FieldDescription,
  FieldLabel,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  Textarea,
} from "@soar-design/soar-react-components"
import { BotIcon, ChevronDownIcon } from "lucide-react"

export function ButtonGroupPopover() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <ButtonGroup>
          <Button variant="secondary">
            <BotIcon /> Copilot
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary" size="icon" aria-label="Open Popover">
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="rounded-xl text-sm">
              <PopoverHeader>
                <PopoverTitle>Start a new task with Copilot</PopoverTitle>
                <PopoverDescription>
                  Describe your task in natural language.
                </PopoverDescription>
              </PopoverHeader>
              <Field>
                <FieldLabel htmlFor="task" className="sr-only">
                  Task Description
                </FieldLabel>
                <Textarea
                  id="task"
                  placeholder="I need to..."
                  className="resize-none"
                />
                <FieldDescription>
                  Copilot will open a pull request for review.
                </FieldDescription>
              </Field>
            </PopoverContent>
          </Popover>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}

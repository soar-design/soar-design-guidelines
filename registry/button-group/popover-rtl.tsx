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
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <ButtonGroup>
          <Button variant="secondary">
            <BotIcon /> Copilot
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary" size="icon" aria-label="فتح النافذة المنبثقة">
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="rounded-xl text-sm">
              <PopoverHeader>
                <PopoverTitle>بدء مهمة جديدة مع Copilot</PopoverTitle>
                <PopoverDescription>
                  اصف مهمتك بلغة طبيعية.
                </PopoverDescription>
              </PopoverHeader>
              <Field>
                <FieldLabel htmlFor="task" className="sr-only">
                  وصف المهمة
                </FieldLabel>
                <Textarea
                  id="task"
                  placeholder="أحتاج إلى..."
                  className="resize-none"
                />
                <FieldDescription>
                  سيقوم Copilot بفتح طلب سحب للمراجعة.
                </FieldDescription>
              </Field>
            </PopoverContent>
          </Popover>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}

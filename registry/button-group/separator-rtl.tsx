import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  DirectionProvider,
} from "@soar-design/soar-react-components"

export function ButtonGroupSeparatorDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <ButtonGroup>
          <Button variant="secondary" size="sm">
            نسخ
          </Button>
          <ButtonGroupSeparator />
          <Button variant="secondary" size="sm">
            لصق
          </Button>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}

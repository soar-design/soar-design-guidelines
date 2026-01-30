import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  DirectionProvider,
} from "@soar-design/soar-react-components"

export function ButtonGroupSeparatorDemo() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <ButtonGroup>
          <Button variant="secondary" size="sm">
            Copy
          </Button>
          <ButtonGroupSeparator />
          <Button variant="secondary" size="sm">
            Paste
          </Button>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}

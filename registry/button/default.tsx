import { Button, DirectionProvider } from "@soar-design/soar-react-components"

export function ButtonDefault() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Button>Button</Button>
      </div>
    </DirectionProvider>
  )
}

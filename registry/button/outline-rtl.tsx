import { Button, DirectionProvider } from "@soar-design/soar-react-components"

export function ButtonOutline() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Button variant="outline">مخطط</Button>
      </div>
    </DirectionProvider>
  )
}

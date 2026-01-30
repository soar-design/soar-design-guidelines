import { Button, DirectionProvider } from "@soar-design/soar-react-components"

export function ButtonSecondary() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Button variant="secondary">ثانوي</Button>
      </div>
    </DirectionProvider>
  )
}

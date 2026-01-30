import { Button, DirectionProvider } from "@soar-design/soar-react-components"

export function ButtonDestructive() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Button variant="destructive">Destructive</Button>
      </div>
    </DirectionProvider>
  )
}

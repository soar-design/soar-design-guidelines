import { Badge, DirectionProvider } from "@soar-design/soar-react-components"

export function BadgeDemo() {
  return (
    <DirectionProvider dir="ltr">
      <div className="flex w-full max-w-lg flex-wrap justify-center gap-2">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    </DirectionProvider>
  )
}

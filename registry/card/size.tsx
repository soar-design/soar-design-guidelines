import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DirectionProvider,
} from "@soar-design/soar-react-components"

export function CardSmall() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Card size="sm" className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Small Card</CardTitle>
            <CardDescription>
              This card uses the small size variant.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The card component supports a size prop that can be set to
              &quot;sm&quot; for a more compact appearance.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              Action
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DirectionProvider>
  )
}

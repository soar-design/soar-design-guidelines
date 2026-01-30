import {
  Badge,
  Button,
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DirectionProvider,
} from "@soar-design/soar-react-components"

export function CardImage() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Card className="relative w-full max-w-sm pt-0">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img
            src="https://avatar.vercel.sh/shadcn1"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
          />
          <CardHeader>
            <CardAction>
              <Badge variant="secondary">Featured</Badge>
            </CardAction>
            <CardTitle>Design systems meetup</CardTitle>
            <CardDescription>
              A practical talk on component APIs, accessibility, and shipping
              faster.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full">View Event</Button>
          </CardFooter>
        </Card>
      </div>
    </DirectionProvider>
  )
}

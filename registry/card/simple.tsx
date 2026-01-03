import { Card, CardHeader, CardTitle, CardContent } from "@soar-design/soar-react-components";

export default function CardSimple() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          A simple card with just a title and content. No description or footer needed.
        </p>
      </CardContent>
    </Card>
  );
}


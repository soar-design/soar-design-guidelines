import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@soar-design/soar-react-components";

export default function CardVariants() {
  return (
    <div className="flex flex-col gap-4">
      <Card variant="default" className="w-[350px]">
        <CardHeader>
          <CardTitle>Default Variant</CardTitle>
          <CardDescription>This is the default card style.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            The default variant provides a clean, minimal appearance suitable for most use cases.
          </p>
        </CardContent>
      </Card>

      <Card variant="accent" className="w-[350px]">
        <CardHeader>
          <CardTitle>Accent Variant</CardTitle>
          <CardDescription>This is the accent card style.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            The accent variant adds visual emphasis to highlight important content.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}


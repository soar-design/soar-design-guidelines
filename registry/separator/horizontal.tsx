import { Separator } from "@soar-design/soar-react-components";

export default function SeparatorHorizontal() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">Section 1</h3>
        <p className="text-sm text-muted-foreground">
          This is the first section of content.
        </p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-medium">Section 2</h3>
        <p className="text-sm text-muted-foreground">
          This is the second section of content.
        </p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-medium">Section 3</h3>
        <p className="text-sm text-muted-foreground">
          This is the third section of content.
        </p>
      </div>
    </div>
  );
}


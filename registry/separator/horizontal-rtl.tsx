import { Separator } from "@soar-design/soar-react-components";

export default function SeparatorHorizontal() {
  return (
    <div className="space-y-4" dir="rtl">
      <div>
        <h3 className="text-lg font-medium">القسم 1</h3>
        <p className="text-sm text-muted-foreground">
          هذا هو القسم الأول من المحتوى.
        </p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-medium">القسم 2</h3>
        <p className="text-sm text-muted-foreground">
          هذا هو القسم الثاني من المحتوى.
        </p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-medium">القسم 3</h3>
        <p className="text-sm text-muted-foreground">
          هذا هو القسم الثالث من المحتوى.
        </p>
      </div>
    </div>
  );
}


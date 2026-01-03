import { Separator } from "@soar-design/soar-react-components";

export default function SeparatorCustomStyle() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-medium">Default separator</p>
        <Separator />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Thicker separator</p>
        <Separator className="h-0.5" />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Colored separator</p>
        <Separator className="bg-primary" />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Dashed separator</p>
        <Separator className="border-t border-dashed bg-transparent" />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Dotted separator</p>
        <Separator className="border-t border-dotted bg-transparent" />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Gradient separator</p>
        <Separator className="h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  );
}


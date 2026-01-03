import { Button } from "@soar-design/soar-react-components";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@soar-design/soar-react-components";

export default function PopoverWithAnchor() {
  return (
    <Popover>
      <div className="flex gap-4 items-center">
        <PopoverTrigger asChild>
          <Button variant="outline">Open</Button>
        </PopoverTrigger>
        <PopoverAnchor asChild>
          <div className="inline-flex h-10 items-center justify-center rounded-md border border-dashed border-input px-4 text-sm">
            Anchor element
          </div>
        </PopoverAnchor>
      </div>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Anchored Popover</h4>
          <p className="text-sm text-muted-foreground">
            This popover is positioned relative to the anchor element, not the
            trigger button.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}


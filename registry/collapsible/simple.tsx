import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Button,
} from "@soar-design/soar-react-components";

export default function CollapsibleSimple() {
  return (
    <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          Show More Information
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border border-border p-4 text-sm">
          This is additional information that can be collapsed or expanded.
          It uses the Collapsible component to show and hide content smoothly.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}


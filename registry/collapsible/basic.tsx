import {
  Button,
  Card,
  CardContent,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { ChevronDown } from "lucide-react"

export function CollapsibleBasic() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto">
        <Card className="mx-auto w-full max-w-sm">
          <CardContent>
            <Collapsible className="data-[state=open]:bg-muted rounded-md">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="group w-full">
                  Product details
                  <ChevronDown className="ml-auto group-data-[state=open]:rotate-180 h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                <div>
                  This panel can be expanded or collapsed to reveal additional
                  content.
                </div>
                <Button size="xs">Learn More</Button>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      </div>
    </DirectionProvider>
  )
}

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@soar-design/soar-react-components";
import { ChevronDown } from "lucide-react";

const items = [
  {
    title: "Getting Started",
    content: "Learn the basics of using our component library with this comprehensive guide.",
  },
  {
    title: "API Reference",
    content: "Detailed documentation of all available components, props, and methods.",
  },
  {
    title: "Examples",
    content: "Browse through practical examples and common use cases to get inspired.",
  },
];

export default function CollapsibleMultiple() {
  return (
    <div className="w-[350px] space-y-2">
      {items.map((item, index) => (
        <Collapsible key={index}>
          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border border-border px-4 py-2 font-medium hover:bg-muted">
            <span>{item.title}</span>
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 py-2">
            <p className="text-sm text-muted-foreground">{item.content}</p>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
}


import { ScrollArea } from "@soar-design/soar-react-components";

const code = `import { ScrollArea } from "@soar-design/soar-react-components";

export function Example() {
  return (
    <ScrollArea className="h-72">
      <div className="p-4">
        <h1>Hello World</h1>
        <p>This is a scrollable area.</p>
      </div>
    </ScrollArea>
  );
}

// More code below...
function anotherFunction() {
  console.log("This is a longer code example");
  console.log("To demonstrate scrolling");
  console.log("In a code block");
  console.log("With syntax highlighting");
}

const config = {
  name: "example",
  version: "1.0.0",
  description: "Example configuration"
};`;

export default function ScrollAreaCode() {
  return (
    <ScrollArea className="h-72 w-full rounded-md border" dir="rtl">
      <pre className="p-4 text-sm">
        <code>{code}</code>
      </pre>
    </ScrollArea>
  );
}


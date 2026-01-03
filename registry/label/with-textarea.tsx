import { Label } from "@soar-design/soar-react-components";

export default function LabelWithTextarea() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="message">Message</Label>
        <span className="text-sm text-muted-foreground">0/500</span>
      </div>
      <textarea
        id="message"
        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Type your message here"
        maxLength={500}
      />
    </div>
  );
}


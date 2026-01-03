import { Label, Input } from "@soar-design/soar-react-components";

export default function LabelWithDescription() {
  return (
    <div className="space-y-2">
      <Label htmlFor="api-key">API Key</Label>
      <Input id="api-key" type="password" placeholder="Enter your API key" />
      <p className="text-sm text-muted-foreground">
        Your API key is used to authenticate requests.
      </p>
    </div>
  );
}


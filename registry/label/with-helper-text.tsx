import { Label, Input } from "@soar-design/soar-react-components";

export default function LabelWithHelperText() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="johndoe" />
        <p className="text-xs text-muted-foreground">
          Choose a unique username (3-20 characters)
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
        <p className="text-xs text-muted-foreground">
          We'll never share your email with anyone
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="website" className="text-destructive">
          Website URL
        </Label>
        <Input
          id="website"
          type="url"
          placeholder="https://example.com"
          className="border-destructive"
        />
        <p className="text-xs text-destructive">
          Please enter a valid URL starting with https://
        </p>
      </div>
    </div>
  );
}


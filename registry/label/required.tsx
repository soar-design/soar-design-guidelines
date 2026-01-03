import { Label, Input } from "@soar-design/soar-react-components";

export default function LabelRequired() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="username">
          Username
          <span className="text-destructive ms-1">*</span>
        </Label>
        <Input id="username" required placeholder="Enter username" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">
          Password
          <span className="text-destructive ms-1">*</span>
        </Label>
        <Input id="password" type="password" required placeholder="Enter password" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio" className="flex items-center gap-2">
          Bio
          <span className="text-xs text-muted-foreground font-normal">
            (Optional)
          </span>
        </Label>
        <Input id="bio" placeholder="Tell us about yourself" />
      </div>
    </div>
  );
}

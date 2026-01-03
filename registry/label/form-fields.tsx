import { Label, Input } from "@soar-design/soar-react-components";

export default function LabelFormFields() {
  return (
    <div className="space-y-6 max-w-md">
      <div className="space-y-2">
        <Label htmlFor="full-name">
          Full Name
          <span className="text-destructive ms-1">*</span>
        </Label>
        <Input id="full-name" placeholder="John Doe" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email-address">
          Email Address
          <span className="text-destructive ms-1">*</span>
        </Label>
        <Input
          id="email-address"
          type="email"
          placeholder="john@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
        <p className="text-sm text-muted-foreground">Optional</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" placeholder="Acme Inc." />
      </div>
    </div>
  );
}


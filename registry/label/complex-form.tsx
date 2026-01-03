import { Label, Input, Checkbox, Button } from "@soar-design/soar-react-components";

export default function LabelComplexForm() {
  return (
    <form className="space-y-6 max-w-md">
      <div className="space-y-2">
        <Label htmlFor="fullName">
          Full Name
          <span className="text-destructive ms-1">*</span>
        </Label>
        <Input id="fullName" required placeholder="John Doe" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="John" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Doe" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email-form">
          Email
          <span className="text-destructive ms-1">*</span>
        </Label>
        <Input
          id="email-form"
          type="email"
          required
          placeholder="you@example.com"
        />
        <p className="text-xs text-muted-foreground">
          We'll send a verification email
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">
          Company
          <span className="text-xs text-muted-foreground font-normal ms-2">
            (Optional)
          </span>
        </Label>
        <Input id="company" placeholder="Acme Inc." />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms-form" required />
        <Label htmlFor="terms-form" className="cursor-pointer">
          I agree to the terms and conditions
          <span className="text-destructive ms-1">*</span>
        </Label>
      </div>

      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}


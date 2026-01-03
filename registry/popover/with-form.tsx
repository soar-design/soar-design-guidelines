import { Button } from "@soar-design/soar-react-components";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@soar-design/soar-react-components";

export default function PopoverWithForm() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Update profile</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Profile</h4>
            <p className="text-sm text-muted-foreground">
              Update your profile information.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid gap-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                defaultValue="John Doe"
                className="h-9 rounded-md border border-input bg-background px-3 text-sm"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                defaultValue="john@example.com"
                className="h-9 rounded-md border border-input bg-background px-3 text-sm"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="bio" className="text-sm font-medium">
                Bio
              </label>
              <textarea
                id="bio"
                defaultValue="I'm a software developer"
                className="min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
          </div>
          <Button className="w-full">Save changes</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}


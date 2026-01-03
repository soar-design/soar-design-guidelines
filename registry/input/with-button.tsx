import { Input, Button } from "@soar-design/soar-react-components";
import { Search } from "lucide-react";

export default function InputWithButton() {
  return (
    <div className="space-y-4">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
      
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="search" placeholder="Search..." />
        <Button size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}


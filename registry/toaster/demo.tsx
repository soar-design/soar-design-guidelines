"use client";

import { Button } from "@soar-design/soar-react-components";
import { toast } from "@soar-design/soar-react-components";

export default function ToasterDemo() {
  return <Button onClick={() => toast("Event has been created")}>Show Toast</Button>;
}

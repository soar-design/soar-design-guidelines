import Link from "next/link"

import { Button } from "@soar-design/soar-react-components"

export function ButtonLinkAsButton() {
  return (
    <Button asChild>
      <Link href="#">Login</Link>
    </Button>
  )
}


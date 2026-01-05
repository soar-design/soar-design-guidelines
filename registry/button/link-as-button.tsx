import Link from "next/link"

import { Button } from "@soar-design/soar-react-components"

export function LinkAsButton() {
  return (
    <Button asChild>
      <Link href="#">Login</Link>
    </Button>
  )
}


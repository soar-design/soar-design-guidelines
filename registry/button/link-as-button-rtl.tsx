import Link from "next/link"

import { Button } from "@soar-design/soar-react-components"

export function LinkAsButtonRTL() {
  return (
    <Button asChild>
      <Link href="#">تسجيل الدخول</Link>
    </Button>
  )
}


import Link from "next/link"

import { Button } from "@soar-design/soar-react-components"

export function ButtonLinkAsButtonDocsRTL() {
  return (
    <Button asChild>
      <Link href="#">تسجيل الدخول</Link>
    </Button>
  )
}


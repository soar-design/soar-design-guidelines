import Link from "next/link"
import { Button, DirectionProvider } from "@soar-design/soar-react-components"

export function ButtonAsChild() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Button asChild>
          <Link href="/login">تسجيل الدخول</Link>
        </Button>
      </div>
    </DirectionProvider>
  )
}

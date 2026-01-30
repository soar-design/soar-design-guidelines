import Image from "next/image"
import { AspectRatio, DirectionProvider } from "@soar-design/soar-react-components"

export function AspectRatioDemo() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-sm">
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
          <Image
            src="https://avatar.vercel.sh/shadcn1"
            alt="Photo"
            fill
            className="w-full rounded-lg object-cover grayscale dark:brightness-20"
          />
        </AspectRatio>
      </div>
    </DirectionProvider>
  )
}

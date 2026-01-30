import Image from "next/image"
import { AspectRatio, DirectionProvider } from "@soar-design/soar-react-components"

export function AspectRatioSquare() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-[12rem]">
        <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg">
          <Image
            src="https://avatar.vercel.sh/shadcn1"
            alt="Photo"
            fill
            className="rounded-lg object-cover grayscale dark:brightness-20"
          />
        </AspectRatio>
      </div>
    </DirectionProvider>
  )
}

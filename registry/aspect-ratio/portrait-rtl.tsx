import Image from "next/image"
import { AspectRatio, DirectionProvider } from "@soar-design/soar-react-components"

export function AspectRatioPortrait() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-[10rem]">
        <AspectRatio ratio={9 / 16} className="bg-muted rounded-lg">
          <Image
            src="https://avatar.vercel.sh/shadcn1"
            alt="صورة"
            fill
            className="rounded-lg object-cover grayscale dark:brightness-20"
          />
        </AspectRatio>
      </div>
    </DirectionProvider>
  )
}

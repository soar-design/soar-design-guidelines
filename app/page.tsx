"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@soar-design/soar-react-components";
import packageJson from "@/package.json";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-background relative flex min-h-screen flex-col items-start justify-between px-6">
      <div className="flex w-11/12 flex-col items-start justify-start pt-6 text-left">
        <Link
          href="/docs/components/button"
          className="flex flex-col items-start space-y-6"
        >
          <div className="flex aspect-square items-center justify-center">
            <Image
              src="/soar-logo.svg"
              alt="Soar DS Logo"
              width={40}
              height={40}
              className="opacity-50 dark:invert"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-5xl leading-none font-bold">Soar</span>
            <span className="text-muted-foreground text-5xl leading-none font-bold">
              Design
            </span>
            <span className="text-muted-foreground text-5xl leading-none font-bold">
              Guidelines
            </span>
          </div>
          <div>
            <Badge
              variant="secondary"
              className="tabular-nums"
            >
              <span className="mr-1.5 h-2 w-2 rounded-full bg-current"></span>v
              {packageJson.version} Alpha
            </Badge>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

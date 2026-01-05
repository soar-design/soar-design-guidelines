"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@soar-design/soar-react-components";
import packageJson from "@/package.json";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-start justify-between bg-background px-6">
      <div className="flex flex-col w-11/12 items-start justify-start text-left pt-6">
        <Link href="/docs/components/button" className="flex flex-col items-start space-y-6">
          <div className="flex aspect-square items-center justify-center">
            <Image
              src="/soar-logo.svg"
              alt="Soar DS Logo"
              width={40}
              height={40}
              className="dark:invert opacity-50"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-5xl leading-none">Soar</span>
            <span className="font-bold text-5xl text-muted-foreground leading-none">Design</span>
            <span className="font-bold text-5xl text-muted-foreground leading-none">
              Guidelines
            </span>
          </div>
          <div>
            <Badge
              size="lg"
              appearance="light"
              variant="secondary"
              shape="circle"
              className="tabular-nums"
            >
              <span className="mr-1.5 h-2 w-2 rounded-full bg-current"></span>v{packageJson.version} Alpha
            </Badge>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

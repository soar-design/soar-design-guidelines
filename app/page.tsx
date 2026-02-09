"use client";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@soar-design/soar-react-components";
import packageJson from "@/package.json";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-background px-6 relative flex min-h-screen flex-col items-start justify-between">
      <div className="pt-6 flex w-11/12 flex-col items-start justify-start text-left">
        <Link
          href="/docs/components/button"
          className="space-y-3 flex flex-col items-start"
        >
          <div className="flex aspect-square items-center justify-center">
            <Image
              src="/soar-logo.svg"
              alt="Soar DS Logo"
              width={48}
              height={48}
              className="dark:invert"
            />
          </div>

          <div className="gap-1 flex flex-col">
            <span className="text-4xl font-bold leading-none">Soar</span>
            <span className="text-muted-foreground text-4xl font-bold leading-none">
              Design
              <br />
              Guidelines
            </span>
          </div>
          <div>
            <Badge
              variant="secondary"
              className="rounded-full tabular-nums"
            >
              <span className="mr-1.5 h-2 w-2 rounded-full bg-current"></span>
              v{packageJson.version} Alpha
            </Badge>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background mt-auto px-6 lg:pe-72">
      <div className="mx-auto max-w-5xl pt-10 pb-16">
        <div className="text-muted-foreground/50 flex flex-col gap-3 text-sm">
          <div className="flex aspect-square h-8 w-8 items-center justify-center">
            <Image
              src="/soar-logo.svg"
              alt="Soar Logo"
              width={24}
              height={24}
              className="opacity-30 dark:invert"
            />
          </div>
          <p>
            <span className="text-xs leading-relaxed font-bold">
              © {currentYear} Soar. All rights reserved.
            </span>
            &nbsp;
            <span className="text-xs leading-relaxed">
              This documentation and design system are for internal use only.
              All content, components, designs, and related materials are
              proprietary and confidential. Unauthorized distribution,
              reproduction, or disclosure is strictly prohibited.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

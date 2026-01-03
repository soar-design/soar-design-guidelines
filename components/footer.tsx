import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="lg:pe-72 px-6 mt-auto bg-background">
      <div className="mx-auto max-w-5xl pt-10 pb-16">
        <div className="flex flex-col gap-3 text-sm text-muted-foreground/50">
          <div className="flex aspect-square items-center justify-center w-8 h-8">
            <Image
              src="/soar-logo.svg"
              alt="Soar Logo"
              width={24}
              height={24}
              className="dark:invert opacity-30"
            />
          </div>
          <p>
            <span className="text-xs font-bold leading-relaxed">
              © {currentYear} Soar. All rights reserved.
            </span>
            &nbsp;
            <span className="text-xs leading-relaxed">
              This documentation and design system are for internal use only. All content,
              components, designs, and related materials are proprietary and confidential.
              Unauthorized distribution, reproduction, or disclosure is strictly prohibited.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

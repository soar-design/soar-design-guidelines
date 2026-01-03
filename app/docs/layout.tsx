import { LayoutShell } from "@/components/layout-shell";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutShell>{children}</LayoutShell>;
}


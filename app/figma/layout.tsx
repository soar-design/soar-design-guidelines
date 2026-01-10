"use client";

export default function FigmaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1 flex-col overflow-auto">{children}</div>
    </div>
  );
}

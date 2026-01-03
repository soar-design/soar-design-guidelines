"use client";

export default function FigmaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 flex-col overflow-auto">{children}</div>
    </div>
  );
}



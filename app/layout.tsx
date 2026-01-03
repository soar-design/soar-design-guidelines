import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
// import "@soar-design/soar-react-components/index.css";
import { LayoutShell } from "@/components/layout-shell";
import { ToasterProvider } from "@/components/toaster-provider";

export const metadata: Metadata = {
  title: "Soar Design Guidelines",
  description: "Documentation for Soar Design Guidelines",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ToasterProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}

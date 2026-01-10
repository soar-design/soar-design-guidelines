import * as React from "react";
import { cn } from "@/lib/utils";
import { CodeBlockWrapper } from "@/components/code-block-wrapper";

export const pre = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) => {
  // Extract raw text content from children for copy functionality
  const extractTextContent = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (React.isValidElement(node)) {
      return extractTextContent((node.props as any).children);
    }
    if (Array.isArray(node)) {
      return node.map(extractTextContent).join("");
    }
    return "";
  };

  const raw = extractTextContent(children);

  return (
    <div className="group relative">
      <CodeBlockWrapper raw={raw} />
      <pre
        className={cn(
          "bg-muted/40 mb-4 overflow-x-auto rounded-[26px] p-4",
          className,
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              "data-line-numbers": "",
            });
          }
          return child;
        })}
      </pre>
    </div>
  );
};

export const code = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  // Check if this is a code block (inside <pre>) or inline code
  // Only code blocks have data-language attribute from rehype-pretty-code
  const isCodeBlock =
    props["data-language" as keyof typeof props] !== undefined;

  if (isCodeBlock) {
    // Code block - minimal styling, let <pre> handle layout
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  // Inline code - CSS handles the styling via span[data-rehype-pretty-code-figure]
  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

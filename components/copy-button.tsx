"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@soar-design/soar-react-components";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  value: string;
}

export function CopyButton({ value }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => {
        setHasCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [hasCopied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setHasCopied(true);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="top-2 right-2 absolute z-10 rounded-full"
      onClick={handleCopy}
      aria-label={hasCopied ? "Copied" : "Copy code"}
    >
      {hasCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </Button>
  );
}

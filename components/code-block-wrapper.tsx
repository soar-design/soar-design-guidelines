"use client";

import * as React from "react";
import { CopyButton } from "@/components/copy-button";

interface CodeBlockWrapperProps {
  raw: string;
}

export function CodeBlockWrapper({ raw }: CodeBlockWrapperProps) {
  return <CopyButton value={raw} />;
}

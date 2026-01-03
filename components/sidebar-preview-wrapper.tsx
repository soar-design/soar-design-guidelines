"use client";

import * as React from "react";
import { useEffect, useRef } from "react";

interface SidebarPreviewWrapperProps {
  children: React.ReactNode;
}

/**
 * Specialized wrapper for Sidebar component previews.
 * 
 * This wrapper isolates sidebar examples from the site's global SidebarProvider
 * by intercepting keyboard events and preventing them from bubbling up to
 * the site's sidebar context.
 */
export function SidebarPreviewWrapper({ children }: SidebarPreviewWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Prevent keyboard shortcuts from affecting the site's sidebar
  useEffect(() => {
    if (!containerRef.current) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // If the event target is within our container, prevent it from bubbling
      if (containerRef.current?.contains(e.target as Node)) {
        if ((e.metaKey || e.ctrlKey) && e.key === "b") {
          // Stop this event from reaching the site's SidebarProvider
          e.stopImmediatePropagation();
        }
      }
    };

    // Use capture phase to intercept before other handlers
    document.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown, { capture: true });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      // Prevent keyboard events from bubbling to parent
      onKeyDownCapture={(e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === "b") {
          e.stopPropagation();
        }
      }}
    >
      {children}
    </div>
  );
}


import * as React from "react";

interface PageHeaderProps {
  title?: string;
  description?: string;
  toolbar?: React.ReactNode;
}

export function PageHeader({ title, description, toolbar }: PageHeaderProps) {
  return (
    <div className="gap-4 mb-8 flex items-start justify-between">
      <div className="flex-1">
        {title && (
          <h1 className="text-3xl font-bold tracking-tight mb-2">{title}</h1>
        )}
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      {toolbar && (
        <div className="gap-2 flex flex-shrink-0 items-center">{toolbar}</div>
      )}
    </div>
  );
}

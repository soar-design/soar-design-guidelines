"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { TocItem } from "@/lib/toc";
import { useMounted } from "@/hooks/use-mounted";

interface TocProps extends React.ComponentProps<"div"> {
  toc: TocItem[];
}

export function DashboardTableOfContents({
  toc,
  className,
  ...props
}: TocProps) {
  const itemIds = React.useMemo(() => {
    if (!toc) return [];

    const extractIds = (items: TocItem[]): string[] => {
      return items.flatMap((item) => {
        const currentId = item.url.split("#")[1];
        const childIds = item.items ? extractIds(item.items) : [];
        return [currentId, ...childIds];
      });
    };

    return extractIds(toc);
  }, [toc]);
  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();

  if (!toc?.length || !mounted) {
    return null;
  }

  return (
    <div
      className={cn("gap-2 flex h-full w-full flex-col", className)}
      {...props}
    >
      <p className="text-foreground px-6 pt-8 text-xs font-medium">
        On This Page
      </p>
      <div className="scrollbar-hide px-6 pb-8 flex-1 overflow-y-auto">
        <Tree tree={toc} activeItem={activeHeading} />
      </div>
    </div>
  );
}

function useActiveItem(itemIds: (string | undefined)[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` },
    );

    itemIds?.forEach((id) => {
      if (!id) {
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        if (!id) {
          return;
        }

        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

interface TreeProps {
  tree: TocItem[];
  level?: number;
  activeItem?: string | null;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  if (!tree?.length || level > 3) {
    return null;
  }

  return (
    <ul className={cn("m-0 text-xs list-none", { "ps-4": level !== 1 })}>
      {tree.map((item, index) => {
        return (
          <li key={index} className="mt-0 pt-3">
            <a
              href={item.url}
              className={cn(
                "hover:text-foreground inline-block no-underline transition-colors",
                item.url === `#${activeItem}`
                  ? "text-foreground font-medium"
                  : "text-muted-foreground",
              )}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree
                tree={item.items}
                level={level + 1}
                activeItem={activeItem}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

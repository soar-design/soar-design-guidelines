import { Skeleton } from "@soar-design/soar-react-components";

export default function SkeletonList() {
  return (
    <div className="space-y-4" dir="rtl">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4 rtl:space-x-reverse">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}


import { Skeleton } from "@soar-design/soar-react-components";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3" dir="rtl">
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
}


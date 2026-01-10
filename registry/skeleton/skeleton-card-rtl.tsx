import { Skeleton } from "@soar-design/soar-react-components";

export function SkeletonCardDocsRTL() {
  return (
    <div className="flex flex-col space-y-3" dir="rtl">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

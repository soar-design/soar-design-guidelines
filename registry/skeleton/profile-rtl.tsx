import { Skeleton } from "@soar-design/soar-react-components";

export default function SkeletonProfile() {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg border p-8" dir="rtl">
      <Skeleton className="h-24 w-24 rounded-full" />
      <div className="space-y-2 text-center">
        <Skeleton className="h-6 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
      <div className="flex space-x-2 rtl:space-x-reverse pt-4">
        <Skeleton className="h-9 w-[100px]" />
        <Skeleton className="h-9 w-[100px]" />
      </div>
      <div className="w-full space-y-4 pt-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[80px]" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-20 w-full" />
        </div>
      </div>
    </div>
  );
}


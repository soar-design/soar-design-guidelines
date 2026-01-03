import { Skeleton } from "@soar-design/soar-react-components";

export default function SkeletonDashboard() {
  return (
    <div className="space-y-6" dir="rtl">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-lg border p-6 space-y-2">
            <Skeleton className="h-4 w-[120px]" />
            <Skeleton className="h-8 w-[80px]" />
            <Skeleton className="h-3 w-[100px]" />
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="rounded-lg border p-6 space-y-4">
        <Skeleton className="h-6 w-[200px]" />
        <Skeleton className="h-[300px] w-full" />
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg border p-6 space-y-4">
        <Skeleton className="h-6 w-[150px]" />
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-4 rtl:space-x-reverse">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


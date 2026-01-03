import { Skeleton } from "@soar-design/soar-react-components";

export default function SkeletonTable() {
  return (
    <div className="w-full space-y-2">
      {/* Table Header */}
      <div className="flex space-x-4 border-b pb-2">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-4 w-[80px]" />
      </div>
      
      {/* Table Rows */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex space-x-4 py-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-4 w-[80px]" />
        </div>
      ))}
    </div>
  );
}


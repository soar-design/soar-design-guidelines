import { Skeleton } from '@soar-design/soar-react-components';

export default function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4 rtl:space-x-reverse" dir="rtl">
      <Skeleton className="size-16 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-5 w-[225px]" />
        <Skeleton className="h-4 w-[175px]" />
      </div>
    </div>
  );
}


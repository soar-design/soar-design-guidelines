'use client';

import { ProgressCircle } from '@soar-design/soar-react-components';

export default function Component() {
  return (
    <div className="flex items-center justify-center" dir="rtl">
      <div className="flex flex-col items-center gap-3">
        <ProgressCircle value={25} size={32} strokeWidth={3} className="text-primary animate-spin" indicatorClassName="text-primary" />
        <span className="text-xs text-muted-foreground">جاري التحميل...</span>
      </div>
    </div>
  );
}


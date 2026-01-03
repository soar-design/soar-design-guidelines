'use client';

import * as React from 'react';
import { Progress } from '@soar-design/soar-react-components';

export default function Component() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-md" dir="rtl">
      <Progress value={progress} indicatorClassName="bg-primary" />
    </div>
  );
}


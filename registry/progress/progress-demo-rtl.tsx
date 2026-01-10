"use client";

import * as React from "react";

import { Progress } from "@soar-design/soar-react-components";

export function ProgressDemoDocsRTL() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[60%]" dir="rtl" />;
}

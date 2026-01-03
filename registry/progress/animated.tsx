"use client";

import { Progress } from "@soar-design/soar-react-components";
import { useEffect, useState } from "react";

export default function ProgressAnimated() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Loading...</span>
        <span className="font-medium">{progress}%</span>
      </div>
      <Progress value={progress} indicatorClassName="bg-primary" />
    </div>
  );
}


'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Progress } from '@soar-design/soar-react-components';

export default function Component() {
  const [downloadProgress, setDownloadProgress] = useState(0);

  // Get status message based on progress
  const getStatusMessage = (progress: number) => {
    if (progress < 5) return 'تهيئة التحميل...';
    if (progress < 15) return 'إعداد البيئة...';
    if (progress < 25) return 'الاتصال بالخادم...';
    if (progress < 35) return 'التحقق من الأذونات...';
    if (progress < 50) return 'تحميل الملفات الأساسية...';
    if (progress < 65) return 'تحميل الأصول...';
    if (progress < 80) return 'تحميل التبعيات...';
    if (progress < 90) return 'استخراج الملفات...';
    if (progress < 95) return 'التحقق من السلامة...';
    if (progress < 100) return 'إنهاء التثبيت...';
    return 'اكتمل التحميل!';
  };

  useEffect(() => {
    // Download simulation
    const downloadTimer = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          return 0; // Reset for continuous loop
        }
        return prev + Math.random() * 3 + 1; // Random increment 1-4
      });
    }, 150);

    return () => {
      clearInterval(downloadTimer);
    };
  }, []);

  return (
    <div className="w-full max-w-md space-y-8" dir="rtl">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>إعداد مساحة العمل</span>
          <span className="text-muted-foreground">{Math.round(downloadProgress)}%</span>
        </div>
        <Progress value={downloadProgress} className="w-full" indicatorClassName="bg-primary" />
        <div className="text-xs text-muted-foreground">{getStatusMessage(downloadProgress)}</div>
      </div>
    </div>
  );
}


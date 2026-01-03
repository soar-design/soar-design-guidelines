"use client";

import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@soar-design/soar-react-components";
import { AlertCircle } from "lucide-react";

export default function AlertDemo() {
  return (
    <div className="flex flex-col items-center w-full lg:max-w-[75%] gap-6">
      <Alert variant="primary" close={true}>
        <AlertIcon>
          <AlertCircle />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>عنوان التنبيه المثال</AlertTitle>
          <AlertDescription>
            أدخل وصف التنبيه هنا. سيبدو أفضل كسطرين من النص.
          </AlertDescription>
        </AlertContent>
      </Alert>
      <Alert variant="destructive" appearance="light" close={true}>
        <AlertIcon>
          <AlertCircle />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>عنوان التنبيه المثال</AlertTitle>
          <AlertDescription>
            أدخل وصف التنبيه هنا. سيبدو أفضل كسطرين من النص.
          </AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  );
}


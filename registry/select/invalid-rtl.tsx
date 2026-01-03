"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Button,
  Label,
} from "@soar-design/soar-react-components";

export default function SelectInvalid() {
  const [value, setValue] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) {
      setShowError(true);
    } else {
      setShowError(false);
      alert(`المحدد: ${value}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
      <div className="space-y-2">
        <Label htmlFor="role">الدور *</Label>
        <Select value={value} onValueChange={(v) => {
          setValue(v);
          setShowError(false);
        }}>
          <SelectTrigger 
            id="role" 
            className="w-[280px]"
            aria-invalid={showError}
          >
            <SelectValue placeholder="اختر دورًا" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">مدير</SelectItem>
            <SelectItem value="editor">محرر</SelectItem>
            <SelectItem value="viewer">عارض</SelectItem>
            <SelectItem value="guest">ضيف</SelectItem>
          </SelectContent>
        </Select>
        {showError && (
          <p className="text-sm text-destructive">يرجى اختيار دور</p>
        )}
      </div>

      <Button type="submit">إرسال</Button>
    </form>
  );
}


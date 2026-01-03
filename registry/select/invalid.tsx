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
      alert(`Selected: ${value}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="role">Role *</Label>
        <Select value={value} onValueChange={(v) => {
          setValue(v);
          setShowError(false);
        }}>
          <SelectTrigger 
            id="role" 
            className="w-[280px]"
            aria-invalid={showError}
          >
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Administrator</SelectItem>
            <SelectItem value="editor">Editor</SelectItem>
            <SelectItem value="viewer">Viewer</SelectItem>
            <SelectItem value="guest">Guest</SelectItem>
          </SelectContent>
        </Select>
        {showError && (
          <p className="text-sm text-destructive">Please select a role</p>
        )}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}


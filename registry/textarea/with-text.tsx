"use client";

import { Textarea, Label } from "@soar-design/soar-react-components";

export default function TextareaWithText() {
  return (
    <div className="space-y-2">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us a little bit about yourself" />
      <p className="text-sm text-muted-foreground">
        Write a few sentences about yourself. This will be displayed on your public profile.
      </p>
    </div>
  );
}

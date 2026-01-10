import * as React from "react";

import { ScrollArea } from "@soar-design/soar-react-components";
import { Separator } from "@soar-design/soar-react-components";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

export function ScrollAreaDemoDocsRTL() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border" dir="rtl">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">العلامات</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}

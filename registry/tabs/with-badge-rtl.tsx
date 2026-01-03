"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger, Badge } from "@soar-design/soar-react-components";

export default function TabsWithBadge() {
  return (
    <Tabs defaultValue="all" className="w-full max-w-md" dir="rtl">
      <TabsList>
        <TabsTrigger value="all">
          الكل
          <Badge variant="secondary" size="xs" className="ms-2">
            12
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="unread">
          غير مقروء
          <Badge variant="destructive" size="xs" className="ms-2">
            3
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="archived">
          مؤرشف
          <Badge variant="secondary" size="xs" className="ms-2">
            8
          </Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">جميع الرسائل</h3>
          <p className="text-sm text-muted-foreground">لديك 12 رسالة إجمالية في صندوق الوارد.</p>
        </div>
      </TabsContent>
      <TabsContent value="unread">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">الرسائل غير المقروءة</h3>
          <p className="text-sm text-muted-foreground">
            لديك 3 رسائل غير مقروءة تحتاج إلى الاهتمام.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="archived">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">الرسائل المؤرشفة</h3>
          <p className="text-sm text-muted-foreground">لديك 8 رسائل مؤرشفة.</p>
        </div>
      </TabsContent>
    </Tabs>
  );
}


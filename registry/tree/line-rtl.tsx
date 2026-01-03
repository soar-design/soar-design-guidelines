"use client";

import React from "react";
import { Tree, TreeItem, TreeItemLabel } from "@soar-design/soar-react-components";
import { hotkeysCoreFeature, syncDataLoaderFeature } from "@headless-tree/core";
import { useTree } from "@headless-tree/react";

interface Item {
  name: string;
  children?: string[];
}

const items: Record<string, Item> = {
  crm: {
    name: "CRM",
    children: ["leads", "accounts", "activities", "support"],
  },
  leads: {
    name: "العملاء المحتملون",
    children: ["new-lead", "contacted-lead", "qualified-lead"],
  },
  "new-lead": { name: "عميل محتمل جديد" },
  "contacted-lead": { name: "عميل محتمل تم الاتصال به" },
  "qualified-lead": { name: "عميل محتمل مؤهل" },
  accounts: {
    name: "الحسابات",
    children: ["acme-corp", "globex-inc"],
  },
  "acme-corp": {
    name: "شركة أكما",
    children: ["acme-contacts", "acme-opportunities"],
  },
  "acme-contacts": {
    name: "جهات الاتصال",
    children: ["john-smith", "jane-doe"],
  },
  "john-smith": { name: "أحمد محمد" },
  "jane-doe": { name: "فاطمة علي" },
  "acme-opportunities": {
    name: "الفرص",
    children: ["website-redesign", "annual-maintenance"],
  },
  "website-redesign": { name: "إعادة تصميم الموقع" },
  "annual-maintenance": { name: "الصيانة السنوية" },
  "globex-inc": {
    name: "شركة جلوبكس",
    children: ["globex-contacts", "globex-opportunities"],
  },
  "globex-contacts": {
    name: "جهات الاتصال",
    children: ["alice-johnson"],
  },
  "alice-johnson": { name: "سارة إبراهيم" },
  "globex-opportunities": {
    name: "الفرص",
    children: ["cloud-migration"],
  },
  "cloud-migration": { name: "الترحيل إلى السحابة" },
  activities: {
    name: "الأنشطة",
    children: ["calls", "meetings", "emails"],
  },
  calls: { name: "المكالمات" },
  meetings: { name: "الاجتماعات" },
  emails: { name: "البريد الإلكتروني" },
  support: {
    name: "الدعم",
    children: ["open-tickets", "closed-tickets"],
  },
  "open-tickets": { name: "التذاكر المفتوحة" },
  "closed-tickets": { name: "التذاكر المغلقة" },
};

const indent = 20;

export default function TreeLine() {
  const tree = useTree<Item>({
    initialState: {
      expandedItems: ["leads", "accounts", "activities"],
    },
    indent,
    rootItemId: "crm",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => items[itemId].children ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
  });

  return (
    <div className="self-start lg:w-[225px]" dir="rtl">
      <Tree
        className="relative before:absolute before:inset-0 before:-me-1 before:bg-[repeating-linear-gradient(to_left,transparent_0,transparent_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)-1px),var(--border)_calc(var(--tree-indent)))]"
        indent={indent}
        tree={tree}
      >
        {tree.getItems().map((item) => {
          return (
            <TreeItem key={item.getId()} item={item}>
              <TreeItemLabel />
            </TreeItem>
          );
        })}
      </Tree>
    </div>
  );
}


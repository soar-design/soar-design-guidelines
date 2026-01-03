"use client";

import {
  Tree,
  TreeItem,
  TreeItemLabel,
  useTree,
  syncDataLoaderFeature,
  hotkeysCoreFeature,
} from "@soar-design/soar-react-components";

interface TreeNode {
  name: string;
  isFolder?: boolean;
}

const items: Record<string, TreeNode> = {
  root: { name: "الجذر", isFolder: true },
  section1: { name: "القسم 1", isFolder: true },
  section2: { name: "القسم 2", isFolder: true },
  "item1.1": { name: "عنصر 1.1" },
  "item1.2": { name: "عنصر 1.2" },
  "item2.1": { name: "عنصر 2.1" },
};

const childrenData: Record<string, string[]> = {
  root: ["section1", "section2"],
  section1: ["item1.1", "item1.2"],
  section2: ["item2.1"],
};

function TreeWithChevron() {
  const tree = useTree<TreeNode>({
    rootItemId: "root",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => item.getItemData().isFolder ?? false,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => childrenData[itemId] ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
  });

  return (
    <Tree tree={tree} toggleIconType="chevron" dir="rtl">
      {tree.getItems().map((item) => (
        <TreeItem key={item.getId()} item={item}>
          <TreeItemLabel item={item} />
        </TreeItem>
      ))}
    </Tree>
  );
}

function TreeWithPlusMinus() {
  const tree = useTree<TreeNode>({
    rootItemId: "root",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => item.getItemData().isFolder ?? false,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => childrenData[itemId] ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature],
  });

  return (
    <Tree tree={tree} toggleIconType="plus-minus" dir="rtl">
      {tree.getItems().map((item) => (
        <TreeItem key={item.getId()} item={item}>
          <TreeItemLabel item={item} />
        </TreeItem>
      ))}
    </Tree>
  );
}

export default function TreeToggleIcons() {
  return (
    <div className="grid w-full grid-cols-2 gap-8" dir="rtl">
      <div className="space-y-2">
        <p className="text-sm font-medium">سهم (افتراضي)</p>
        <TreeWithChevron />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">زائد/ناقص</p>
        <TreeWithPlusMinus />
      </div>
    </div>
  );
}


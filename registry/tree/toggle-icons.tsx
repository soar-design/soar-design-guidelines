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
  root: { name: "Root", isFolder: true },
  section1: { name: "Section 1", isFolder: true },
  section2: { name: "Section 2", isFolder: true },
  "item1.1": { name: "Item 1.1" },
  "item1.2": { name: "Item 1.2" },
  "item2.1": { name: "Item 2.1" },
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
    <Tree tree={tree} toggleIconType="chevron">
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
    <Tree tree={tree} toggleIconType="plus-minus">
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
    <div className="grid w-full grid-cols-2 gap-8">
      <div className="space-y-2">
        <p className="text-sm font-medium">Chevron (default)</p>
        <TreeWithChevron />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Plus/Minus</p>
        <TreeWithPlusMinus />
      </div>
    </div>
  );
}

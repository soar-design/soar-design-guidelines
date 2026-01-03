"use client";

import {
  Tree,
  TreeItem,
  TreeItemLabel,
  TreeDragLine,
  useTree,
  syncDataLoaderFeature,
  hotkeysCoreFeature,
  selectionFeature,
  dragAndDropFeature,
  createOnDropHandler,
} from "@soar-design/soar-react-components";
import { useState, useCallback } from "react";

interface TreeNode {
  name: string;
  isFolder?: boolean;
}

const initialItems: Record<string, TreeNode> = {
  root: { name: "Root", isFolder: true },
  folder1: { name: "Folder 1", isFolder: true },
  folder2: { name: "Folder 2", isFolder: true },
  folder3: { name: "Folder 3", isFolder: true },
  "file1.txt": { name: "File 1.txt" },
  "file2.txt": { name: "File 2.txt" },
  "file3.txt": { name: "File 3.txt" },
  "file4.txt": { name: "File 4.txt" },
  "file5.txt": { name: "File 5.txt" },
};

const initialChildren: Record<string, string[]> = {
  root: ["folder1", "folder2", "folder3"],
  folder1: ["file1.txt", "file2.txt"],
  folder2: ["file3.txt"],
  folder3: ["file4.txt", "file5.txt"],
};

export default function TreeWithDragAndDrop() {
  const [items] = useState(initialItems);
  const [childrenMap, setChildrenMap] = useState(initialChildren);

  const onDrop = useCallback(
    createOnDropHandler<TreeNode>((item, newChildren) => {
      setChildrenMap((prev) => ({
        ...prev,
        [item.getId()]: newChildren,
      }));
    }),
    []
  );

  const tree = useTree<TreeNode>({
    rootItemId: "root",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => item.getItemData().isFolder ?? false,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => childrenMap[itemId] ?? [],
    },
    onDrop,
    canDrag: () => true,
    canDrop: () => true,
    features: [
      syncDataLoaderFeature,
      hotkeysCoreFeature,
      selectionFeature,
      dragAndDropFeature,
    ],
  });

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Drag and drop items to reorder or move between folders.
      </p>
      <Tree tree={tree} className="w-full max-w-sm">
        {tree.getItems().map((item) => (
          <TreeItem key={item.getId()} item={item}>
            <TreeItemLabel item={item} />
          </TreeItem>
        ))}
        <TreeDragLine />
      </Tree>
    </div>
  );
}

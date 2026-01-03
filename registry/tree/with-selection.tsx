"use client";

import {
  Tree,
  TreeItem,
  TreeItemLabel,
  useTree,
  syncDataLoaderFeature,
  hotkeysCoreFeature,
  selectionFeature,
} from "@soar-design/soar-react-components";

interface TreeNode {
  name: string;
  isFolder?: boolean;
}

const items: Record<string, TreeNode> = {
  root: { name: "Root", isFolder: true },
  documents: { name: "Documents", isFolder: true },
  images: { name: "Images", isFolder: true },
  music: { name: "Music", isFolder: true },
  "doc1.pdf": { name: "Report.pdf" },
  "doc2.docx": { name: "Notes.docx" },
  "doc3.txt": { name: "Todo.txt" },
  "img1.png": { name: "Screenshot.png" },
  "img2.jpg": { name: "Photo.jpg" },
  "song1.mp3": { name: "Track 01.mp3" },
  "song2.mp3": { name: "Track 02.mp3" },
};

const childrenData: Record<string, string[]> = {
  root: ["documents", "images", "music"],
  documents: ["doc1.pdf", "doc2.docx", "doc3.txt"],
  images: ["img1.png", "img2.jpg"],
  music: ["song1.mp3", "song2.mp3"],
};

export default function TreeWithSelection() {
  const tree = useTree<TreeNode>({
    rootItemId: "root",
    getItemName: (item) => item.getItemData().name,
    isItemFolder: (item) => item.getItemData().isFolder ?? false,
    dataLoader: {
      getItem: (itemId) => items[itemId],
      getChildren: (itemId) => childrenData[itemId] ?? [],
    },
    features: [syncDataLoaderFeature, hotkeysCoreFeature, selectionFeature],
  });

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Click to select. Hold Shift to select multiple. Hold Ctrl/Cmd to toggle.
      </p>
      <Tree tree={tree} className="w-full max-w-sm">
        {tree.getItems().map((item) => (
          <TreeItem key={item.getId()} item={item}>
            <TreeItemLabel item={item} />
          </TreeItem>
        ))}
      </Tree>
    </div>
  );
}

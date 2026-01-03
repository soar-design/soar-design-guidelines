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
  root: { name: "الجذر", isFolder: true },
  documents: { name: "المستندات", isFolder: true },
  images: { name: "الصور", isFolder: true },
  music: { name: "الموسيقى", isFolder: true },
  "doc1.pdf": { name: "تقرير.pdf" },
  "doc2.docx": { name: "ملاحظات.docx" },
  "doc3.txt": { name: "قائمة المهام.txt" },
  "img1.png": { name: "لقطة شاشة.png" },
  "img2.jpg": { name: "صورة.jpg" },
  "song1.mp3": { name: "مقطع 01.mp3" },
  "song2.mp3": { name: "مقطع 02.mp3" },
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
    <div className="space-y-4" dir="rtl">
      <p className="text-sm text-muted-foreground">
        انقر للتحديد. اضغط Shift لتحديد عدة عناصر. اضغط Ctrl/Cmd للتبديل.
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


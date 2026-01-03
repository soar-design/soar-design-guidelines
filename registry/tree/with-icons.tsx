"use client";

import {
  Tree,
  TreeItem,
  TreeItemLabel,
  useTree,
  syncDataLoaderFeature,
  hotkeysCoreFeature,
} from "@soar-design/soar-react-components";
import {
  FileText,
  Folder,
  FolderOpen,
  Image,
  FileCode,
  FileJson,
  Music,
} from "lucide-react";

interface TreeNode {
  name: string;
  isFolder?: boolean;
  icon?: string;
}

const items: Record<string, TreeNode> = {
  root: { name: "Root", isFolder: true },
  src: { name: "src", isFolder: true },
  assets: { name: "assets", isFolder: true },
  "app.tsx": { name: "App.tsx", icon: "code" },
  "index.tsx": { name: "index.tsx", icon: "code" },
  "package.json": { name: "package.json", icon: "json" },
  "readme.md": { name: "README.md", icon: "text" },
  "logo.png": { name: "logo.png", icon: "image" },
  "icon.svg": { name: "icon.svg", icon: "image" },
  "theme.mp3": { name: "theme.mp3", icon: "music" },
};

const childrenData: Record<string, string[]> = {
  root: ["src", "assets", "package.json", "readme.md"],
  src: ["app.tsx", "index.tsx"],
  assets: ["logo.png", "icon.svg", "theme.mp3"],
};

function getIcon(item: TreeNode, isExpanded: boolean) {
  if (item.isFolder) {
    return isExpanded ? (
      <FolderOpen className="size-4 text-amber-500" />
    ) : (
      <Folder className="size-4 text-amber-500" />
    );
  }

  switch (item.icon) {
    case "code":
      return <FileCode className="size-4 text-blue-500" />;
    case "json":
      return <FileJson className="size-4 text-yellow-500" />;
    case "image":
      return <Image className="size-4 text-green-500" />;
    case "music":
      return <Music className="size-4 text-purple-500" />;
    default:
      return <FileText className="size-4 text-muted-foreground" />;
  }
}

export default function TreeWithIcons() {
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
    <Tree tree={tree} className="w-full max-w-sm" toggleIconType="plus-minus">
      {tree.getItems().map((item) => (
        <TreeItem key={item.getId()} item={item}>
          <TreeItemLabel item={item}>
            {getIcon(item.getItemData(), item.isExpanded())}
            {item.getItemData().name}
          </TreeItemLabel>
        </TreeItem>
      ))}
    </Tree>
  );
}

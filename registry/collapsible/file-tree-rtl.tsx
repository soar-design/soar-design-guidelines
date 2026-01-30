import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  DirectionProvider,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@soar-design/soar-react-components"
import { ChevronRight, File, Folder } from "lucide-react"

type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] }

export function CollapsibleFileTree() {
  const fileTree: FileTreeItem[] = [
    {
      name: "components",
      items: [
        {
          name: "ui",
          items: [
            { name: "button.tsx" },
            { name: "card.tsx" },
            { name: "dialog.tsx" },
            { name: "input.tsx" },
            { name: "select.tsx" },
            { name: "table.tsx" },
          ],
        },
        { name: "login-form.tsx" },
        { name: "register-form.tsx" },
      ],
    },
    {
      name: "lib",
      items: [{ name: "utils.ts" }, { name: "cn.ts" }, { name: "api.ts" }],
    },
    {
      name: "hooks",
      items: [
        { name: "use-media-query.ts" },
        { name: "use-debounce.ts" },
        { name: "use-local-storage.ts" },
      ],
    },
    {
      name: "types",
      items: [{ name: "index.d.ts" }, { name: "api.d.ts" }],
    },
    {
      name: "public",
      items: [
        { name: "favicon.ico" },
        { name: "logo.svg" },
        { name: "images" },
      ],
    },
    { name: "app.tsx" },
    { name: "layout.tsx" },
    { name: "globals.css" },
    { name: "package.json" },
    { name: "tsconfig.json" },
    { name: "README.md" },
    { name: ".gitignore" },
  ]

  const renderItem = (fileItem: FileTreeItem) => {
    if ("items" in fileItem) {
      return (
        <Collapsible key={fileItem.name}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="group hover:bg-accent hover:text-accent-foreground w-full justify-start transition-none"
            >
              <ChevronRight className="transition-transform group-data-[state=open]:rotate-90 h-4 w-4" />
              <Folder className="h-4 w-4" />
              {fileItem.name}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="style-lyra:mr-4 mt-1 mr-5">
            <div className="flex flex-col gap-1">
              {fileItem.items.map((child) => renderItem(child))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )
    }
    return (
      <Button
        key={fileItem.name}
        variant="link"
        size="sm"
        className="text-foreground w-full justify-start gap-2"
      >
        <File className="h-4 w-4" />
        <span>{fileItem.name}</span>
      </Button>
    )
  }

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto">
        <Card className="mx-auto w-full max-w-[16rem] gap-2" size="sm">
          <CardHeader>
            <Tabs defaultValue="explorer">
              <TabsList className="w-full">
                <TabsTrigger value="explorer">المستكشف</TabsTrigger>
                <TabsTrigger value="settings">المخطط</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-1">
              {fileTree.map((item) => renderItem(item))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DirectionProvider>
  )
}

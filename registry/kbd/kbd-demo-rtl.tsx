import { Kbd, KbdGroup } from "@soar-design/soar-react-components"

export function KbdDemoDocsRTL() {
  return (
    <div className="flex flex-col items-center gap-4" dir="rtl">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    </div>
  )
}


import { Kbd } from "@soar-design/soar-react-components";

export default function KbdInText() {
  return (
    <div className="space-y-4 max-w-2xl">
      <p className="text-sm">
        To save your work, press <Kbd>⌘</Kbd> <Kbd>S</Kbd> on Mac or{" "}
        <Kbd>Ctrl</Kbd> <Kbd>S</Kbd> on Windows.
      </p>

      <p className="text-sm">
        Use <Kbd>Tab</Kbd> to move to the next field and <Kbd>⇧</Kbd>{" "}
        <Kbd>Tab</Kbd> to move to the previous field.
      </p>

      <p className="text-sm">
        Press <Kbd>Esc</Kbd> to close this dialog or <Kbd>Enter</Kbd> to
        confirm.
      </p>

      <p className="text-sm">
        Navigate through the list using <Kbd>↑</Kbd> and <Kbd>↓</Kbd> arrow
        keys.
      </p>
    </div>
  );
}


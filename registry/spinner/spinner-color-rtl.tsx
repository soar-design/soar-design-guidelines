import { Spinner } from "@soar-design/soar-react-components";

export function SpinnerColorDocsRTL() {
  return (
    <div className="flex items-center gap-6" dir="rtl">
      <Spinner className="size-6 text-red-500" />
      <Spinner className="size-6 text-green-500" />
      <Spinner className="size-6 text-blue-500" />
      <Spinner className="size-6 text-yellow-500" />
      <Spinner className="size-6 text-purple-500" />
    </div>
  );
}

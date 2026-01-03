import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@soar-design/soar-react-components';

export default function SelectDemo() {
  return (
    <div dir="rtl">
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="اختر إطار عمل" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>واجهة أمامية</SelectLabel>
            <SelectItem value="react">React</SelectItem>
            <SelectItem value="nextjs">Next.js</SelectItem>
            <SelectItem value="angular">Angular</SelectItem>
            <SelectItem value="vue">Vue.js</SelectItem>
            <SelectItem value="svelte">Svelte</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>واجهة خلفية</SelectLabel>
            <SelectItem value="express">Express</SelectItem>
            <SelectItem value="nestjs">NestJS</SelectItem>
            <SelectItem value="django">Django</SelectItem>
            <SelectItem value="flask">Flask</SelectItem>
            <SelectItem value="laravel">Laravel</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}


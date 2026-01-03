import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@soar-design/soar-react-components';
import { Code, ArrowRight, Sparkles } from 'lucide-react';

export default function SelectDemo() {
  return (
    <Select defaultValue="3" indicatorPosition="right">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">
          <span className="flex items-center gap-2">
            <Code className="size-4 opacity-60" />
            <span>React</span>
          </span>
        </SelectItem>
        <SelectItem value="2">
          <span className="flex items-center gap-2">
            <ArrowRight className="size-4 opacity-60" />
            <span>Next.js</span>
          </span>
        </SelectItem>
        <SelectItem value="3">
          <span className="flex items-center gap-2">
            <Sparkles className="size-4 opacity-60" />
            <span>Gatsby</span>
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}







import { Avatar, AvatarFallback, AvatarImage } from '@soar-design/soar-react-components';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@soar-design/soar-react-components';

export default function SelectDemo() {
  return (
    <Select defaultValue="3" indicatorPosition="right">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select user" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-xs py-1 font-normal text-muted-foreground ps-2">Select a user</SelectLabel>
          <SelectItem value="1">
            <span className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage src="https://randomuser.me/api/portraits/men/22.jpg" alt="@reui" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <span>Alan Bold</span>
            </span>
          </SelectItem>
          <SelectItem value="2">
            <span className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage src="https://randomuser.me/api/portraits/men/61.jpg" alt="@reui" />
                <AvatarFallback>EJ</AvatarFallback>
              </Avatar>
              <span>Ethan James</span>
            </span>
          </SelectItem>
          <SelectItem value="3">
            <span className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage src="https://randomuser.me/api/portraits/women/53.jpg" alt="@reui" />
                <AvatarFallback>NK</AvatarFallback>
              </Avatar>
              <span>Nina Clark</span>
            </span>
          </SelectItem>
          <SelectItem value="4">
            <span className="flex items-center gap-2">
              <Avatar className="size-6">
                <AvatarImage src="https://randomuser.me/api/portraits/men/85.jpg" alt="@reui" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <span>Sean Otto</span>
            </span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

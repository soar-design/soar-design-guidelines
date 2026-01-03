import { Checkbox } from '@soar-design/soar-react-components';
import { Label } from '@soar-design/soar-react-components';

export default function Component() {
  return (
    <div dir="rtl">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <Checkbox id="terms" />
        <Label htmlFor="terms">قبول الشروط والأحكام</Label>
      </div>
    </div>
  );
}


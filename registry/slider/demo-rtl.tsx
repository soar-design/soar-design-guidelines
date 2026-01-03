import { Slider, SliderThumb } from '@soar-design/soar-react-components';

export default function SliderDemo() {
  return (
    <div className="w-full md:w-[400px]" dir="rtl">
      <Slider defaultValue={[50]} max={100} step={1}>
        <SliderThumb />
      </Slider>
    </div>
  );
}


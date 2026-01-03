import { Slider, SliderThumb } from '@soar-design/soar-react-components';

export default function SliderDemo() {
  return (
    <div className="w-full md:w-[400px]" dir="rtl">
      <Slider defaultValue={[100, 450]} min={0} max={600} step={1}>
        <SliderThumb />
        <SliderThumb />
      </Slider>
    </div>
  );
}


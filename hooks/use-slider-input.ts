import { useState, useCallback } from 'react';

interface UseSliderInputProps {
  minValue: number;
  maxValue: number;
  initialValue: [number, number];
}

export function useSliderInput({ minValue, maxValue, initialValue }: UseSliderInputProps) {
  const [sliderValues, setSliderValues] = useState<[number, number]>(initialValue);
  const [inputValues, setInputValues] = useState<[string, string]>([
    initialValue[0].toString(),
    initialValue[1].toString(),
  ]);

  const handleSliderChange = useCallback(
    (values: number[]) => {
      const newValues = values as [number, number];
      setSliderValues(newValues);
      setInputValues([newValues[0].toString(), newValues[1].toString()]);
    },
    []
  );

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    const value = e.target.value;
    setInputValues((prev) => {
      const newValues: [string, string] = [...prev];
      newValues[index] = value;
      return newValues;
    });
  }, []);

  const validateAndUpdateValue = useCallback(
    (value: string, index: 0 | 1) => {
      const numValue = Number(value);

      if (isNaN(numValue)) {
        // Reset to slider value if invalid
        setInputValues((prev) => {
          const newValues: [string, string] = [...prev];
          newValues[index] = sliderValues[index].toString();
          return newValues;
        });
        return;
      }

      // Clamp value to min/max
      const clampedValue = Math.max(minValue, Math.min(maxValue, numValue));
      const newValues: [number, number] = [...sliderValues];
      newValues[index] = clampedValue;

      // Ensure min <= max
      if (index === 0 && newValues[0] > newValues[1]) {
        newValues[0] = newValues[1];
      } else if (index === 1 && newValues[1] < newValues[0]) {
        newValues[1] = newValues[0];
      }

      setSliderValues(newValues);
      setInputValues([newValues[0].toString(), newValues[1].toString()]);
    },
    [minValue, maxValue, sliderValues]
  );

  return {
    sliderValues,
    setSliderValues,
    inputValues,
    handleSliderChange,
    handleInputChange,
    validateAndUpdateValue,
  };
}


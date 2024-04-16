import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input"
import { BaseFilter } from './BaseFilter';
import {  ColourFilterProps, HexColour } from '@/types';

export const ColourFilter: React.FC<ColourFilterProps> = ({ label, filterState, onStateChange }) => {
  const [colourValue, setColour] = useState<HexColour>(filterState);
  const [debouncedColour, setDebouncedColour] = useState<HexColour>(filterState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedColour(colourValue);
    }, 500);

    return () => clearTimeout(timeout);
  }, [colourValue]);
  
  useEffect(() => {
    onStateChange(debouncedColour);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedColour]);

  return (
    <BaseFilter label={label}>
      <>
        <Input
          type="color"
          value={colourValue}
          onChange={value => setColour(value.target.value as unknown as HexColour)}
          className="mt-1 h-6"
          aria-label={`${label} number`}
        />
      </>
    </BaseFilter>
  );
};

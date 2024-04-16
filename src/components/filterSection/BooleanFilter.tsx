import React, { useState, useEffect } from 'react';
import { BaseFilter } from './BaseFilter';
import {  BooleanFilterProps } from '@/types';
import { Checkbox } from "@/components/ui/checkbox";


export const BooleanFilter: React.FC<BooleanFilterProps> = ({ label, id, filterState, onStateChange }) => {
  const [booleanValue, setBoolean] = useState<boolean | 'indeterminate'>(filterState);
  
  useEffect(() => {
    if (booleanValue === 'indeterminate') return;
    onStateChange(booleanValue);
  }, [booleanValue]);


  return (
    <BaseFilter label={label} >
      <>
        <Checkbox
          id={label.toLowerCase().replace(' ', '_') + '_checkbox'}
          checked={booleanValue}
          onCheckedChange={setBoolean}
        />
      </>
    </BaseFilter>
  );
};

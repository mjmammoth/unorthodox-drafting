// components/NumericFilter.tsx
import React, { useState, useEffect } from 'react';
import { BaseFilter } from './BaseFilter';
import { Select, SelectTrigger, SelectItem, SelectContent } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { operatorMap, operatorHumanType, operatorType, NumericFilterProps } from '@/types';

function getTextOperator(operator: operatorType): operatorHumanType {
  return operatorMap[operator];
}


export const NumericFilter: React.FC<NumericFilterProps> = ({ label, filterState, changeableOperator=false, onStateChange }) => {
  const [operator, setOperator] = useState<operatorType>(filterState.operator);
  const [numberValue, setNumber] = useState<number>(filterState.value);
  
  useEffect(() => {
    onStateChange({ value: numberValue, operator: operator});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberValue, operator]);


  return (
    <BaseFilter label={label}>
      <>
        {changeableOperator && (
          <Select 
            value={filterState.operator}
            onValueChange={(value) => setOperator(value as operatorType)}
            aria-label={`${label} operator`}
          >
            <SelectTrigger className="h-6">{getTextOperator(filterState.operator) || "Select"}</SelectTrigger>
            <SelectContent>
              <SelectItem value="<">Less than</SelectItem>
              <SelectItem value=">">Greater than</SelectItem>
              <SelectItem value="=">Equal to</SelectItem>
            </SelectContent>
          </Select>
        )}
        <Input 
          type="number"
          value={filterState.value} 
          onChange={(e) => setNumber(Number(e.target.value))}
          className="mt-1 h-6"
          aria-label={`${label} number`}
        />
      </>
    </BaseFilter>
  );
};


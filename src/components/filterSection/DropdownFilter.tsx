import React, { useState, useEffect } from 'react';
import { BaseFilter } from './BaseFilter';
import { DropdownFilterProps } from '@/types';
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"


export const DropdownFilter: React.FC<DropdownFilterProps> = ({ label, filterState, onStateChange, options }) => {
  const [selectedOption, setSelectedOption] = useState<string>(filterState);

  useEffect(() => {
    onStateChange(selectedOption);
  }, [selectedOption]);
  
  return (
    <BaseFilter label={label}>
      <>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <label className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              {selectedOption}
              <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </label>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {options.map(option => (
              <DropdownMenuItem key={option} onClick={() => setSelectedOption(option)}>{option}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    </BaseFilter>
  );
};

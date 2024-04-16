import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { GripVerticalIcon } from "@/components/icons";
import { BaseFilterProps } from '@/types';

export const BaseFilter: React.FC<BaseFilterProps> = ({ label, children }) => {
  const baseCheckboxId = label.toLowerCase().replace(' ', '_') + '_enabled';
  return (
    <div className="flex items-center space-x-2 h-12">
      <div className="w-4">
        <GripVerticalIcon className="text-gray-400" />
      </div>
      <Checkbox id={baseCheckboxId} className="w-4 h-4 border border-gray-300 rounded-sm shadow-sm" />
      <label>
        <span className="block text-sm text-gray-700">{label}</span>
        {children}
      </label>
    </div>
  );
};

import React, { useState } from 'react';
import { NumericFilter } from './NumericFilter';
import { Reorder } from 'framer-motion';
import { NumericFilterState } from '@/types';
import { BooleanFilter } from './BooleanFilter';
import { DropdownFilter } from './DropdownFilter';
import { ColourFilter } from './ColourFilter';
import { BooleanFilterBaseProps, NumericFilterBaseProps, DropdownFilterBaseProps, FilterSectionProps, FilterDispatchActions, ColourFilterBaseProps } from '@/types';

const filterComponents = {
  numeric: NumericFilter,
  boolean: BooleanFilter,
  dropdown: DropdownFilter,
  colour: ColourFilter,
};

type FilterProps =
  | NumericFilterBaseProps
  | BooleanFilterBaseProps
  | DropdownFilterBaseProps
  | ColourFilterBaseProps

const filterList: FilterProps[] = [
  {
    filterType: 'numeric',
    id: 'legCount',
    label: 'Number of Legs',
    filterState: {value: 2, operator: '='},
  },
  {
    filterType: 'boolean',
    id: 'facialHair',
    label: 'Facial Hair',
    filterState: false,
  },
  {
    filterType: 'colour',
    id: 'hexColour',
    label: 'Hex Colour',
    filterState: '#13BA6D',
  },
  {
    filterType: 'numeric',
    id: 'eyeCount',
    label: 'Number of Eyes',
    filterState: {value: 2, operator: '='},
  },
  {
    filterType: 'boolean',
    id: 'flying',
    label: 'Flying',
    filterState: false,
  },
  {
    filterType: 'dropdown',
    id: 'elementalAffinity',
    label: 'Elemental Affinity',
    filterState: 'Fire',
    options: ['Fire', 'Water', 'Earth', 'Air'],
  },
];

const filterDispatchMap : { [key: string]: FilterDispatchActions } = {
  hexColour: "SET_HEX_COLOUR",
  flying: "SET_FLYING",
  elementalAffinity: "SET_ELEMENTAL_AFFINITY",
  eyeCount: "SET_EYE_COUNT",
  legCount: "SET_LEG_COUNT",
  facialHair: "SET_FACIAL_HAIR",
};


export default function FilterSection({ filterStates, dispatch, filtersOrder }: FilterSectionProps) {
  return (
    <div className="flex flex-col min-w-60 max-w-96 bg-white p-4 shadow rounded-lg m-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Filters</h2>
      <div className="space-y-2">
        {filtersOrder.map((filterID) => {
          const filterConfig = filterList.find((config) => config.id === filterID);
          if (!filterConfig) {
            console.error(`Filter with ID ${filterID} not found in filterList`);
            return null;
          }
          const FilterComponent = filterComponents[filterConfig.filterType];
          const filterState = filterStates[filterConfig.id];
          return (
            <Reorder.Item key={filterConfig.id} value={filterConfig.id}>
              <FilterComponent {...filterConfig as any} filterState={filterState} onStateChange={(value: any) => dispatch({ type: filterDispatchMap[filterConfig.id], payload: value })} />
            </Reorder.Item>
          )
        })}
      </div>
    </div>
  );
}

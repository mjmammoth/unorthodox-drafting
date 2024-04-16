import { useState } from "react";
import { Reorder } from "framer-motion";

import ColourFilter from './ColourFilter';
import LegCountFilter from './LegCountFilter';
import { FilterState, FilterActions } from "@/types"

const FILTER_GENERIC_TYPES = {
  COLOUR: 'COLOUR',
  BOOLEAN: 'BOOLEAN',
  NUMBER: 'NUMBER',
  SLIDER: 'SLIDER',
  RANGE: 'RANGE',
};

const filterComponentGenerics = {
  [FILTER_GENERIC_TYPES.COLOUR]: ColourFilter,
  // [FILTER_GENERIC_TYPES.BOOLEAN]: BooleanFilter,
  // [FILTER_GENERIC_TYPES.NUMBER]: NumberFilter,
  // [FILTER_GENERIC_TYPES.SLIDER]: SliderFilter,
  // [FILTER_GENERIC_TYPES.RANGE]: RangeFilter,
};

const FILTER_TYPES = {
  COLOUR: FILTER_GENERIC_TYPES.COLOUR,
  LEG_COUNT: FILTER_GENERIC_TYPES.NUMBER,
  FLYING: FILTER_GENERIC_TYPES.BOOLEAN,
}

const filterComponents = {
  
  

interface FilterComponentProps {
  value: string | number | boolean | [number, number];
  onChange: (value: any) => void;
}

const initialFilters = [
  { id: 1, type: FILTER_TYPES.NUMBER, state: 0, label: 'Leg Count' }, // Assuming leg count is a simple number
  // { id: 2, type: FILTER_TYPES.BOOLEAN, state: false, label: 'Flying' }, // A boolean for flying
  // Add other filters as needed
];

interface FilterSectionProps {
  filterState: FilterState;
  dispatch: React.Dispatch<FilterActions>;
}

export default function FilterSection({filterState, dispatch} : FilterSectionProps) {
  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (filterId: number, newValue: any) => {
    setFilters(filters.map(filter => filter.id === filterId ? { ...filter, state: newValue } : filter));
  };

  return (
    <Reorder.Group axis="y" onReorder={setFilters} values={filters}>
      {filters.map((filter) => {
        const FilterComponent = filterComponents[filter.type];
        return (
          <Reorder.Item key={filter.id} value={filter}>
            <FilterComponent
              value={filter.state}
              onChange={(newValue: any) => handleFilterChange(filter.id, newValue)}
            />
          </Reorder.Item>
        );
      })}
    </Reorder.Group>
  );
}

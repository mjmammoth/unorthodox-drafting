
export type HexColour = `#${string}`;

export interface FilterProps {
  state: HexColour;
  onStateChange: (hexColour: HexColour) => void;
}

export type operatorType = '<' | '>' | '=';
export type operatorHumanType = 'Less than' | 'Greater than' | 'Equal to';
export const operatorMap: Record<operatorType, operatorHumanType> = {
  '<': 'Less than',
  '>': 'Greater than',
  '=': 'Equal to',
};

export interface NumericFilterState {
  value: number;
  operator: operatorType;
}

export type FilterType = 'numeric' | 'boolean' | 'dropdown' | 'colour';

export interface BaseFilterProps {
  label: string;
  children: React.ReactNode;
}

interface SharedFilterProps<T>{
  label: string;
  id: keyof FilterStates;
  filterState: T
  filterType: FilterType;
}

export interface ColourFilterBaseProps extends SharedFilterProps<HexColour>{ }
export interface ColourFilterProps extends ColourFilterBaseProps {
  onStateChange: (hexColour: HexColour) => void;
}

export interface NumericFilterBaseProps extends SharedFilterProps<NumericFilterState> {
  changeableOperator?: boolean;
}
export interface NumericFilterProps extends NumericFilterBaseProps {
  onStateChange: (numericFilterState: NumericFilterState) => void;
}

export interface BooleanFilterBaseProps extends SharedFilterProps<boolean> { }
export interface BooleanFilterProps extends BooleanFilterBaseProps {
  onStateChange: (booleanState: boolean) => void;
}

export interface DropdownFilterBaseProps extends SharedFilterProps<string> {
  options: string[];
}
export interface DropdownFilterProps extends DropdownFilterBaseProps {
  onStateChange: (dropdownState: string) => void;
}

type ElementalAffinity = 'Fire' | 'Water' | 'Earth';

export interface FilterStates {
  hexColour: string;
  flying: boolean;
  legCount: number;
  facialHair: boolean;
  elementalAffinity: ElementalAffinity;
  eyeCount: NumericFilterState
}

export type FilterDispatchActions = 
  | 'SET_HEX_COLOUR'
  | 'SET_EYE_COUNT'
  | 'SET_LEG_COUNT'
  | 'SET_FLYING'
  | 'SET_FACIAL_HAIR'
  | 'SET_ELEMENTAL_AFFINITY'
  ;

export type FilterAction = 
  | { type: 'SET_HEX_COLOUR', payload: string }
  | { type: 'SET_EYE_COUNT', payload: NumericFilterState}
  | { type: 'SET_LEG_COUNT', payload: number }
  | { type: 'SET_FLYING', payload: boolean }
  | { type: 'SET_FACIAL_HAIR', payload: boolean }
  | { type: 'SET_ELEMENTAL_AFFINITY', payload: ElementalAffinity }
  ;

export interface FilterSectionProps {
  filterStates: FilterStates;
  dispatch: React.Dispatch<FilterAction>;
  filtersOrder: string[];
}

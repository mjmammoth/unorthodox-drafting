export type FilterActions = 
  | { type: 'SET_COLOUR', payload: string }
  ;

export type HexColour = string;

export interface ColourFilterProps {
  hexColour: HexColour;
  setColour: (hexColour: HexColour) => void;
}

export interface FilterState {
  hexColour: HexColour;
}

export type FilterActions = 
  | { type: 'SET_COLOUR', payload: string }
  ;

export type Colour = string;

export interface ColourFilterProps {
  colour: Colour;
  setColour: (colour: Colour) => void;
}

export interface FilterState {
  colour: Colour;
}

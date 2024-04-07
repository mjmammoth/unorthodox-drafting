import { FilterState, FilterActions } from "@/types"

import ColourFilter from './ColourFilter';

interface FilterSectionProps {
  filterState: FilterState;
  dispatch: React.Dispatch<FilterActions>;
}

export default function FilterSection({filterState, dispatch} : FilterSectionProps) {
  const setColour = (hexColour: string) => dispatch({ type: 'SET_COLOUR', payload: hexColour });
  return (
    <div>
      <div key="1" className="flex flex-col items-center justify-center m-8">
        <div className="w-full max-w-2xl p-4 rounded-lg shadow-inner mt-4 relative dark:bg-stone-100">
          <h2 className="text-2xl font-bold mb-2 flex justify-between items-center text-gray-800">Filters</h2>
          <div className="grid gap-4">
            <ColourFilter hexColour={filterState.hexColour} setColour={setColour} />
          </div>
        </div>
      </div>
    </div>
  );
}


// function shuffleArray(array: Hero[]) {
//   let currentIndex = array.length, randomIndex;
//   while (currentIndex != 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;
//     [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
//   }
//   return array;
// }

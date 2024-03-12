import { ColourFilterProps } from '@/types';

const ColourFilter = ({ colour, setColour }: ColourFilterProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">Colour Scheme</label>
    <input
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      type="color"
      value={colour}
      onChange={(e) => setColour(e.target.value)}
    />
  </div>
);

export default ColourFilter;

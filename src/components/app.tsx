import { HoverCardTrigger, HoverCardContent, HoverCard } from "@/components/ui/hover-card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { TooltipTrigger, TooltipContent, Tooltip, TooltipProvider } from "@/components/ui/tooltip"

export function App() {
  return (
    <div key="1" className="flex flex-col items-center justify-center m-8">
      <div className="w-full max-w-2xl p-4 rounded-lg shadow-inner mt-4 relative dark:bg-stone-100">
        <h2 className="text-2xl font-bold mb-2 flex justify-between items-center">Filters</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Colour Scheme</label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="color"
              value="#123524"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Lower Limbs</label>
            <select className="mt-1 block w-full py-2 px-3 border border-gray-200 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-800">
              <option>Legs</option>
              <option>No Legs</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Flying</label>
            <select className="mt-1 block w-full py-2 px-3 border border-gray-200 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-800">
              <option>Yes</option>
              <option>No preference</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Hero Complexity</label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              max="5"
              min="1"
              type="range"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Elemental Affinity</label>
            <select className="mt-1 block w-full py-2 px-3 border border-gray-200 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-800">
              <option>Fire</option>
              <option>Water</option>
              <option>Air</option>
              <option>Lightning</option>
              <option>Cosmic</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Zoo</label>
            <select className="mt-1 block w-full py-2 px-3 border border-gray-200 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-800">
              <option>None</option>
              <option>Default</option>
              <option>Some</option>
              <option>A lot</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Roles</label>
            <select className="mt-1 block w-full py-2 px-3 border border-gray-200 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-800">
              <option>Balanced</option>
              <option>Carries</option>
              <option>Supports</option>
              <option>Initiators</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Headwear</label>
            <select className="mt-1 block w-full py-2 px-3 border border-gray-200 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:border-gray-800">
              <option>None</option>
              <option>A little</option>
              <option>A lot</option>
            </select>
          </div>
        </div>
        <div className="absolute top-2 right-2 flex space-x-2">
          <Button size="icon" variant="ghost">
          </Button>
          <Button size="icon" variant="ghost">
          </Button>
        </div>
      </div>
      <Button className="bg-indigo-500 text-white mt-4 relative group">
        Lock in Team
        <span className="absolute -right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
              </TooltipTrigger>
              <TooltipContent>
                <p>More information will be available once the team is locked in.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>
      </Button>
    </div>
  )
}

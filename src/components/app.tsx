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
            <RefreshCwIcon className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <ShuffleIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <Button className="bg-indigo-500 text-white mt-4 relative group">
        Lock in Team
        <span className="absolute -right-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <InfoIcon className="h-5 w-5 ml-2" />
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


function RefreshCwIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 1 9-9 9.75 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 1-9 9.75 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  )
}


function ShuffleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
      <path d="m18 2 4 4-4" />
      <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
      <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
      <path d="m18 14 4 4-4" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}

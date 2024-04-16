import { Checkbox } from "@/components/ui/checkbox"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { GripVerticalIcon } from "@/components/icons"
import { Input } from "@/components/ui/input"

interface GenericFilterProps<T> {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options?: string[]; // Dropdown options
}

export default function GenericFilter<T>({ label, value, onChange, options }: GenericFilterProps<T>) {
  console.log('GenericFilter render', label, value);
  const checkbox_id = label.toLowerCase().replace(' ', '_');
  if (options) {
    // Dropdown
    return (
      <div className="flex items-center space-x-2 space-y-2">
        <div className="w-4">
          <GripVerticalIcon className="text-gray-400" />
        </div>
        <Checkbox id={checkbox_id} />
        <label>
          <span className="block text-sm text-gray-700">{label}</span>
          <Select
            value={value as unknown as string}
            onValueChange={value => onChange(value as unknown as T)}
            >
            <SelectTrigger className="h-6">
              <SelectValue placeholder="Select"/>
            </SelectTrigger>
            <SelectContent>
              {options.map(option => (
                <SelectItem className="h-6" key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </label>
      </div>
    );
  }

  // Boolean or Number
  const type = typeof value === 'boolean' ? 'checkbox' : 'number';
  return (
    <div className="flex items-center space-x-2 space-y-2">
      <div className="w-4">
        <GripVerticalIcon className="text-gray-400" />
      </div>
      <Checkbox id={checkbox_id} />
      <label>
        <span className="block text-sm text-gray-700">{label}</span>
        <Input
          className="mt-1 h-6"
          type={type}
          onChange={e => {
            if (type === 'checkbox') {
              onChange(e.target.checked as unknown as T);
            } else {
              onChange(parseInt(e.target.value) as unknown as T);
            }
          }}
          // Using type assertion to bypass the type error
          value={type === 'checkbox' ? undefined : value as any}
          checked={type === 'checkbox' ? value as unknown as boolean : undefined}
        />
      </label>
    </div>
  );
}

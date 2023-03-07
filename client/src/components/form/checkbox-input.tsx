import { ChangeEvent, FC } from 'react'

interface CheckBoxInputProps {
  value: boolean
  onChange: (arg: boolean) => void
}

export const CheckBoxInput: FC<CheckBoxInputProps> = ({ value, onChange }) => {
  return (
    <div className="grid">
      <div className="-mt-8 lg:mt-2">
        <label className="inline-flex items-center">
          <input
            checked={value}
            id="teal-checkbox"
            type="checkbox"
            onChange={(e: ChangeEvent<{ checked: boolean }>) => onChange(e.target.checked)}
            className="w-4 h-4 text-green-600 border-0 rounded-md focus:ring-0"
          />
          <span className="ml-2 font-bold text-gray-900">2 Repository Mode</span>
        </label>
      </div>
    </div>
  )
}

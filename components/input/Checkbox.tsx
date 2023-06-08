import { type ReactNode } from "react"
import { twJoin } from "tailwind-merge"
import { montserrat } from "../typography/Typography"

type CheckboxProps = {
  className?: string
  label?: ReactNode
  value?: string
  required?: boolean
}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <div className="mb-4 flex items-start">
      <input
        required={props.required}
        id="default-checkbox"
        type="checkbox"
        value=""
        className={twJoin(
          "h-4 w-4 rounded border-gray-300 bg-white text-main focus:ring-2 focus:ring-blue-500",
          props.className
        )}
      />
      <label
        htmlFor="default-checkbox"
        className={twJoin(
          "ml-2 text-checkbox text-white",
          montserrat.className
        )}
      >
        {props.label}
      </label>
    </div>
  )
}

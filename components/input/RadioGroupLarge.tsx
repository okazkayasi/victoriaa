import clsx from "clsx"
import { type UseFormRegister } from "react-hook-form"
import { twMerge } from "tailwind-merge"
import { Text } from "../typography/Typography"

type RadioGroupLargeProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  className?: string
  options: string[]
  name: string
  selectedValue?: string
}

export function RadioGroupLarge(props: RadioGroupLargeProps) {
  return (
    <ul className={clsx("flex flex-col gap-6", props.className)}>
      {props.options.map((option, index) => (
        <RadioLarge
          key={index}
          name={props.name}
          label={option}
          value={option}
          register={props.register}
          selectedValue={props.selectedValue}
        />
      ))}
    </ul>
  )
}

type RadioLargeProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  name: string
  label: string
  value: string
  selectedValue?: string
}

function RadioLarge(props: RadioLargeProps) {
  const { name, label, value, register } = props
  const id = `age-form-${value}`

  const isChecked = props.selectedValue === value
  return (
    <li
      className={twMerge(
        "box-border flex w-full items-center gap-3 rounded-lg border-2 bg-white p-3",
        isChecked && "border-2 border-secondary"
      )}
    >
      <input
        type="radio"
        id={id}
        value={value}
        className="hidden"
        {...register(name, { required: true })}
      />
      <label htmlFor={id} className="flex-1 cursor-pointer  text-black ">
        <div className="align-center flex gap-4">
          <div
            className={clsx(
              "flex h-5.5 w-5.5 items-center justify-center rounded-full border border-black"
            )}
          >
            {isChecked && (
              <div className="h-3.5 w-3.5 rounded-full bg-secondary"></div>
            )}
          </div>
          <div className="flex items-center">
            <Text size="medium" className="text-radio-large">
              {label}
            </Text>
          </div>
        </div>
      </label>
    </li>
  )
}

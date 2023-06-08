import clsx from "clsx"
import { type UseFormRegister } from "react-hook-form"
import { twMerge } from "tailwind-merge"
import { montserrat, Text } from "../typography/Typography"

type RadioGroupSmallProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  className?: string
  options: readonly [string, ...string[]]
  text: string
  name: string
  selectedValue?: string
}

export const RadioGroupSmall = ({
  className,
  ...props
}: RadioGroupSmallProps) => {
  return (
    <div className={clsx("w-full rounded bg-white px-6 pb-2 pt-2", className)}>
      <Text size="xsmall" color="black" className="mb-1">
        {props.text}
      </Text>
      <ul className={clsx("flex gap-7 px-6")}>
        {props.options.map((option) => (
          <RadioSmall
            key={props.name + option}
            name={props.name}
            label={option}
            value={option}
            register={props.register}
            selectedValue={props.selectedValue}
          />
        ))}
      </ul>
    </div>
  )
}

type RadioSmallProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  name: string
  label: string
  value: string
  selectedValue?: string
}

const RadioSmall = ({
  name,
  label,
  value,
  register,
  selectedValue,
}: RadioSmallProps) => {
  const id = `${name}-${value}`

  const isChecked = selectedValue === value

  return (
    <li
      className={twMerge(
        "box-border flex h-6 w-6 items-center justify-center rounded-full border-2 border-black bg-white",
        isChecked && "bg-secondary"
      )}
    >
      <input
        type="radio"
        id={id}
        value={value}
        className="hidden"
        {...register(name, { required: true })}
      />
      <label
        htmlFor={id}
        className={clsx(
          "flex-1 cursor-pointer text-center text-p-xs text-black focus-visible:outline-none",
          montserrat.className,
          isChecked && "text-white"
        )}
      >
        {label}
      </label>
    </li>
  )
}

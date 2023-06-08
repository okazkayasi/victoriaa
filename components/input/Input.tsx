import { Montserrat } from "next/font/google"
import { forwardRef, type ForwardRefRenderFunction } from "react"
import { twMerge } from "tailwind-merge"

const FontMontserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

type InputProps = {
  value?: string
  className?: string
  placeholder: string
  disabled?: boolean
  helperText?: string
  fullWidth?: boolean
  type?: "text" | "password" | "number" | "email" | "search" | "tel" | "url"
  required?: boolean
}

const _Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props,
  ref
) => {
  return (
    <input
      className={twMerge(
        "rounded-lg bg-white px-3 py-3 text-sm leading-none placeholder-black outline-none xs:px-4.5 xs:py-4 xs:text-input",
        FontMontserrat.className,
        props.className
      )}
      ref={ref}
      {...props}
    />
  )
}

export const Input = forwardRef(_Input)

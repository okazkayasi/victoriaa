import { cva } from "class-variance-authority"
import { Montserrat } from "next/font/google"
import Link from "next/link"
import {
  forwardRef,
  type ForwardRefRenderFunction,
  type ReactNode,
} from "react"
import { twMerge } from "tailwind-merge"

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

type ButtonProps = {
  type?: "button" | "submit" | "reset"
  variant?: "contained" | "outlined" | "text" | "icon"
  disabled?: boolean
  color?: "primary" | "secondary" | "error"
  size?: "none" | "xsmall" | "small" | "small-with-icon" | "medium" | "large"
  startIcon?: ReactNode
  endIcon?: ReactNode
  loading?: boolean
  children?: ReactNode
  className?: string
  block?: boolean
  href?: string
  onClick?: () => void
}

const button = cva(
  [
    "rounded-xl flex items-center justify-center gap-2.5 leading-none",
    montserrat.className,
  ],
  {
    variants: {
      intent: {
        contained: ["bg-white", "text-main"],
        outlined: [
          "bg-main",
          "text-white",
          "border-white",
          "border",
          "outline-none",
        ],
        text: ["bg-transparent", "underline", "text-p-lg", "text-white"],
        icon: ["rounded-full", "bg-white"],
      },
      size: {
        none: ["p-0", "leading-none"],
        xsmall: ["p-2.5", "leading-none"],
        ["small-with-icon"]: ["px-4", "py-2", "sm:px-6", "leading-none"],
        small: ["py-3.5", "px-6", "leading-none"],
        medium: ["py-4", "px-8", "text-lg", "leading-none"],
        large: ["p-3", "xs:py-5", "xs:px-5", "text-xl", "leading-none"],
      },
    },
    defaultVariants: {
      intent: "contained",
      size: "medium",
    },
  }
)

const _Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  props,
  ref
) => {
  const { children, variant, startIcon, endIcon, className, size, href } = props

  return (
    <ConditionalWrapper
      condition={!!href}
      wrapper={(c) => (
        <Link href={href || ""} passHref>
          {c}
        </Link>
      )}
    >
      <button
        onClick={props.onClick}
        type={props.type}
        className={twMerge(
          button({
            intent: variant,
            size: size,
          }),
          className
        )}
        ref={ref}
      >
        {startIcon && <div>{startIcon}</div>}
        {children}
        {endIcon && <div>{endIcon}</div>}
      </button>
    </ConditionalWrapper>
  )
}
export const Button = forwardRef(_Button)

type ConditionalWrapperProps = {
  condition: boolean
  wrapper: (children: JSX.Element) => JSX.Element
  children: JSX.Element
}
const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps): JSX.Element =>
  condition ? wrapper(children) : children

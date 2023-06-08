import { cva } from "class-variance-authority"
import { Montserrat } from "next/font/google"
import { type ReactNode } from "react"
import { twJoin } from "tailwind-merge"

export const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const title = cva([montserrat.className], {
  variants: {
    size: {
      xsmall: ["text-h-xs"],
      small: ["text-h-sm"],
      medium: ["text-h-md"],
      large: ["text-h-lg"],
      xlarge: ["text-h-xl"],
      xxlarge: ["text-h-2xl"],
    },
    color: {
      black: ["text-black"],
      white: ["text-white"],
      main: ["text-main"],
    },
    bold: {
      true: ["font-semibold"],
    },
  },
  defaultVariants: {
    size: "small",
    color: "black",
    bold: false,
  },
})

type TitleProps = {
  children?: ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge"
  color?: "black" | "white" | "main"
  bold?: boolean
}

export const Title = (props: TitleProps) => {
  const { children, className, as, size, color } = props

  const classMerged = twJoin(
    title({
      size: size,
      color,
      bold: props.bold,
    }),
    className
  )

  const defaultTitle = <h1 className={classMerged}>{children}</h1>

  if (!as || as === "h1") {
    return defaultTitle
  } else if (as === "h2") {
    return <h2 className={classMerged}>{children}</h2>
  } else if (as === "h3") {
    return <h3 className={classMerged}>{children}</h3>
  } else if (as === "h4") {
    return <h4 className={classMerged}>{children}</h4>
  } else if (as === "h5") {
    return <h5 className={classMerged}>{children}</h5>
  } else if (as === "h6") {
    return <h6 className={classMerged}>{children}</h6>
  } else if (as === "p") {
    return <p className={classMerged}>{children}</p>
  }

  return defaultTitle
}

const text = cva([montserrat.className], {
  variants: {
    size: {
      xsmall: ["text-p-xs"],
      small: ["text-p-sm"],
      medium: ["text-p-md"], //19-23
      large: ["text-p-lg"],
    },
    color: {
      black: ["text-black"],
      white: ["text-white"],
      main: ["text-main"],
    },
    bold: {
      true: ["font-semibold"],
    },
  },
  defaultVariants: {
    size: "medium",
    color: "black",
    bold: false,
  },
})

type TextProps = {
  children?: ReactNode
  className?: string
  size?: "xsmall" | "small" | "medium" | "large"
  color?: "black" | "white" | "main"
  bold?: boolean
}

export const Text = (props: TextProps) => {
  const { children, className, size, color, bold } = props

  const variant = { size, color, bold } as const

  return <p className={twJoin(text(variant), className)}>{children}</p>
}

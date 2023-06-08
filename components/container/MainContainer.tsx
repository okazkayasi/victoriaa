import type { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type MainContainerProps = {
  children?: ReactNode
  className?: string
}

export const MainContainer = (props: MainContainerProps) => {
  const { children, className } = props
  return <main className={twMerge(className, "bg-bg-main")}>{children}</main>
}

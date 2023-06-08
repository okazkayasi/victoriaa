import { type ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export const GridLayout = (props: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={twMerge("grid grid-cols-dashboard", props.className)}>
      <div />
      <div>{props.children}</div>
      <div />
    </div>
  )
}

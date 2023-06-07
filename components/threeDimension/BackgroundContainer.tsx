import { type ReactNode } from "react"
import { Scene } from "./Scene"

export const BackgroundContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-1">
      <div className="fixed inset-0 z-10">
        <Scene />
      </div>
      <div className="h-full p-4.5">
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  )
}

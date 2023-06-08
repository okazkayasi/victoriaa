import { type ReactNode } from "react"
import { type IconNames } from "../../utils/getIconsToDisplay"

export const IconWrapper = ({
  children,
  onClick,
  displayIcons,
  iconName,
}: {
  children: ReactNode
  onClick: () => void
  displayIcons: IconNames[]
  iconName: IconNames
}) => {
  return displayIcons.includes(iconName) ? (
    <button onClick={onClick} className="focus-visible:outline-none">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
        {children}
      </div>
    </button>
  ) : null
}

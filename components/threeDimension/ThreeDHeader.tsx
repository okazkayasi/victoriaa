import { type Dispatch, type SetStateAction } from "react"
import { initialMenu, type MenuType } from "../../pages/3d-store"
import { CartIcon } from "../shapes/CartIcon"
import { QuestionMarkIcon } from "../shapes/QuestionMarkIcon"
import { SettingsIcon } from "../shapes/SettingsIcon"
import { SunIcon } from "../shapes/SunIcon"
import { IconWrapper } from "./IconsWrapper"

export const ThreeDHeader = ({
  setMenu,
  displayIcons,
}: {
  setMenu: Dispatch<SetStateAction<MenuType>>
  displayIcons: ("tutorialIcon" | "settingsIcon" | "cartIcon" | "profileIcon")[]
}) => {
  const toggle = (key: keyof MenuType) => {
    return () =>
      setMenu((prev) => ({
        ...initialMenu,
        [key]: !prev[key],
      }))
  }

  return (
    <div className="relative z-20 flex items-center justify-between">
      <div className="flex gap-1.5">
        <IconWrapper
          onClick={toggle("tutorialOn")}
          displayIcons={displayIcons}
          iconName="tutorialIcon"
        >
          <QuestionMarkIcon />
        </IconWrapper>
        <IconWrapper
          onClick={toggle("settingsOn")}
          displayIcons={displayIcons}
          iconName="settingsIcon"
        >
          <SettingsIcon />
        </IconWrapper>
      </div>
      <div className="flex gap-1.5">
        <IconWrapper
          onClick={toggle("cartOn")}
          displayIcons={displayIcons}
          iconName="cartIcon"
        >
          <CartIcon />
        </IconWrapper>
        <IconWrapper
          onClick={toggle("profileOn")}
          displayIcons={displayIcons}
          iconName="profileIcon"
        >
          <SunIcon />
        </IconWrapper>
      </div>
    </div>
  )
}

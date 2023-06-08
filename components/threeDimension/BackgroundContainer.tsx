import { MenuType, Products } from "pages/3d-store"
import { Dispatch, SetStateAction, type ReactNode } from "react"
import { Scene } from "./Scene"

export const BackgroundContainer = ({
  children,
  menu,
  setMenu,
  setSelectedProduct,
}: {
  children: ReactNode
  menu: MenuType
  setMenu: Dispatch<SetStateAction<MenuType>>
  setSelectedProduct: Dispatch<SetStateAction<Products>>
}) => {
  return (
    <div className="flex-1">
      <div className="fixed inset-0 z-10">
        <Scene
          menu={menu}
          setMenu={setMenu}
          setSelectedProduct={setSelectedProduct}
        />
      </div>
      <div className="h-full p-4.5">
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  )
}

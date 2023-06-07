import { type Dispatch, type SetStateAction } from "react"
import { type MenuType, type Products } from "../../pages/3d-store"
import { Button } from "../button/Button"

export const ProductButtons = ({
  setSelectedProduct,
  setMenu,
}: {
  setSelectedProduct: Dispatch<SetStateAction<Products>>
  setMenu: Dispatch<SetStateAction<MenuType>>
}) => {
  const openProductModal = (productName: Products) => {
    return () => {
      setMenu((prev) => ({ ...prev, productOn: true }))
      setSelectedProduct(productName)
    }
  }

  return (
    <div className="absolute left-4 top-24 z-20">
      <div className="flex flex-col gap-4">
        <div>
          <Button size="xsmall" onClick={openProductModal("go_for_detox")}>
            Go For Detox
          </Button>
        </div>
        <div>
          <Button size="xsmall" onClick={openProductModal("go_for_glow")}>
            Go for Glow
          </Button>
        </div>
        <div>
          <Button
            size="xsmall"
            onClick={openProductModal("go_for_protection_skincare")}
          >
            Go for Protection Skincare
          </Button>
        </div>
        <div>
          <Button
            size="xsmall"
            onClick={openProductModal("go_for_protection_dietary")}
          >
            Go For Protection Dietary
          </Button>
        </div>
        <div>
          <Button size="xsmall" onClick={openProductModal("time_to_repair")}>
            Time to Repair
          </Button>
        </div>
        <div>
          <Button size="xsmall" onClick={openProductModal("happy_age")}>
            Happy Age
          </Button>
        </div>
        <div>
          <Button size="xsmall" onClick={openProductModal("sculpt_glow")}>
            Sculpt & Glow
          </Button>
        </div>
        <div>
          <Button size="xsmall" onClick={openProductModal("time_to_detox")}>
            Time to Detox
          </Button>
        </div>
      </div>
    </div>
  )
}

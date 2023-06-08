import { productVariantMatching } from "components/model/constants"
import { useState } from "react"
import {
  deleteFromCart,
  updateCartItem,
  type CartItemData,
} from "../../utils/apiOperations/cartOps"
import { useCurrentCart } from "../../utils/hooks/useCurrentCart"
import { toastSuccess } from "../../utils/toast"
import { PureCartItem } from "./PureCartItem"

export type CartItemProps = {
  product: CartItemData
  className?: string
  color?: "black" | "white"
}

export const CartItem = ({ product }: CartItemProps) => {
  const [loading, setLoading] = useState(false)
  const { refetch, isLoading } = useCurrentCart()

  const productVariantId = productVariantMatching.find(
    (p) => p.productId === product.merchandise.product.id
  )?.variantId

  const deleteProductFromCart = async () => {
    await deleteFromCart({ lineId: product.id }).then(() => {
      void refetch().then(() => {
        toastSuccess("Item removed from cart")
      })
    })
  }

  // TODO: implement increment and decrement
  const incrementItem = async () => {
    setLoading(true)
    if (!productVariantId) return
    await updateCartItem({
      lineId: product.id,
      quantity: product.quantity + 1,
      variantId: productVariantId,
    }).then(() => {
      void refetch().then(() => {
        setLoading(false)
      })
    })
  }
  const decrementItem = async () => {
    if (!productVariantId || product.quantity === 1) return
    setLoading(true)
    await updateCartItem({
      lineId: product.id,
      quantity: product.quantity - 1,
      variantId: productVariantId,
    }).then(() => {
      void refetch().then(() => {
        setLoading(false)
      })
    })
  }

  return (
    <PureCartItem
      product={{
        quantity: product.quantity,
        amount: product.cost.subtotalAmount.amount,
        quantityAvailable: 5,
        title: product.merchandise.product.title,
        imageSrc: product.merchandise.product.images.edges[0].node.url,
      }}
      deleteItem={deleteProductFromCart}
      incrementItem={incrementItem}
      decrementItem={decrementItem}
      color="black"
      loading={loading}
    />
  )
}

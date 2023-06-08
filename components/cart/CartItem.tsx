import {
  deleteFromCart,
  type CartItemData,
} from "../../utils/apiOperations/cartOps"
import { useCurrentCart } from "../../utils/hooks/useCurrentCart"
import { noop } from "../../utils/noop"
import { toastSuccess } from "../../utils/toast"
import { PureCartItem } from "./PureCartItem"

export type CartItemProps = {
  product: CartItemData
  className?: string
  color?: "black" | "white"
}

export const CartItem = ({ product }: CartItemProps) => {
  const { refetch } = useCurrentCart()

  const deleteProductFromCart = async () => {
    await deleteFromCart({ lineId: product.id }).then(() => {
      void refetch().then(() => {
        toastSuccess("Item removed from cart")
      })
    })
  }

  // TODO: implement increment and decrement
  const incrementItem = noop
  const decrementItem = noop

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
    />
  )
}

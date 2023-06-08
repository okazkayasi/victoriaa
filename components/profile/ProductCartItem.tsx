import { type ProdNodeWithQuantity } from "../../utils/useProfileProducts"
import { PureCartItem } from "../cart/PureCartItem"

type ProfileCartProps = {
  className?: string
  product: ProdNodeWithQuantity
  deleteProduct: (id: string) => void
  incrementProduct: (id: string) => void
  decrementProduct: (id: string) => void
}

export const ProductCartItem = ({
  product,
  className,
  deleteProduct,
  incrementProduct,
  decrementProduct,
}: ProfileCartProps) => {
  const deleteItem = () => {
    deleteProduct(product.id)
  }
  const incrementItem = () => {
    incrementProduct(product.id)
  }
  const decrementItem = () => {
    decrementProduct(product.id)
  }

  const price = parseFloat(product.variants.edges[0]?.node.price.amount ?? "0")
  const totalPrice = price * product.quantity

  return (
    <PureCartItem
      product={{
        amount: totalPrice.toFixed(2),
        imageSrc: product.images.edges[0]?.node.url ?? "",
        quantity: product.quantity,
        title: product.title,
        quantityAvailable:
          product.variants.edges[0]?.node.quantityAvailable ?? 0,
      }}
      deleteItem={deleteItem}
      incrementItem={incrementItem}
      decrementItem={decrementItem}
      className={className}
    />
  )
}

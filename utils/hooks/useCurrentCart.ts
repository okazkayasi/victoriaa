import { useEffect, useState } from "react"
import { createCart, useCart, type CartData } from "../apiOperations/cartOps"
import { useCurrentUser } from "../hooks/useCurrentUser"

export const useCurrentCart = () => {
  const [cart, setCart] = useState<CartData>(null as unknown as CartData)
  const user = useCurrentUser()

  const { data: cartData, isLoading, error, isSuccess, refetch } = useCart()

  useEffect(() => {
    const cartErrorExists = !!cartData?.errors?.length
    if (user) {
      if (!isLoading) {
        if (!cartErrorExists && !!cartData) {
          setCart(cartData)
        } else {
          void createCart().then((res) => {
            console.log(res, "new cart is created")
            void refetch()
          })
        }
      }
    }
  }, [user, cartData, isLoading, error, isSuccess, refetch])

  return { cart, refetch, isLoading } as const
}

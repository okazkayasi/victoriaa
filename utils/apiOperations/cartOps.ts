import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { type ApiData, type Error } from "../types"
import { fetcher, getAuthToken } from "./fetcher"

export type CartItemData = {
  id: string
  quantity: number
  cost: {
    subtotalAmount: {
      amount: string
    }
    totalAmount: {
      amount: string
    }
  }
  merchandise: {
    product: {
      title: string
      images: {
        edges: {
          node: {
            id: string
            url: string
          }
        }[]
      }
    }
  }
}

export type CartData = {
  errors?: Error[]
  data: {
    cart: {
      checkoutUrl: string
      cost: {
        subtotalAmount: {
          amount: string
        }
        totalAmount: {
          amount: string
        }
      }
      totalQuantity: number
      lines: {
        edges: {
          node: CartItemData
        }[]
      }
    }
  }
}

type CreateCartResponse = {
  id: string
  checkoutUrl: string
}
export const useCart = () => {
  return useQuery<CartData>({
    queryKey: ["cart"],
    queryFn: () =>
      fetcher<ApiData<CartData>>("/my/cart").then((res) => res.data),
  })
}
export const createCart = () => {
  const token = getAuthToken()

  return axios
    .post<ApiData<CreateCartResponse>>("/my/cart", null, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    })
    .then((res) => res.data)
}

export const addToCart = (data: { variantId: string; quantity: number }) => {
  const token = getAuthToken()
  return axios
    .post<any>("/my/cart/lines", data, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    })
    .then((res) => console.log(res.data, "data after add"))
}

export const deleteFromCart = (data: { lineId: string }) => {
  const token = getAuthToken()
  return axios
    .delete<any>(`/my/cart/lines?lineId=${data.lineId}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    })
    .then((res) => console.log(res.data, "data after delete"))
}

export const updateCartItem = (data: { lineId: string; quantity: number }) => {
  const token = getAuthToken()
  return axios
    .put<any>(
      "my/cart/lines",
      { ...data, variantId: "" },
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      }
    )
    .then((res) => res.data)
}

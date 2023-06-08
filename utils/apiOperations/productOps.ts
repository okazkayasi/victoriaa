import { useQuery } from "@tanstack/react-query"
import { fetcher } from "./fetcher"

export type ImageNode = {
  id: string
  url: string
}

export type ProdNode = {
  id: string
  availableForSale: boolean
  description: string
  productType: string
  featuredImage: {
    id: string
  }
  images: {
    edges: {
      node: ImageNode
    }[]
  }
  title: string
  variants: {
    edges: {
      node: {
        id: string
        price: {
          amount: string
        }
        quantityAvailable: number
        sku: string
      }
    }[]
  }
}

export type ProductsResponse = {
  data: {
    products: {
      edges: { node: ProdNode }[]
    }
  }
}

export const useProducts = () => {
  return useQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: () => fetcher<ProductsResponse>("/products?limit=100"),
  })
}

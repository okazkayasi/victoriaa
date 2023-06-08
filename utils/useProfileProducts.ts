import { useEffect, useState } from "react"
import { type SolarProfile } from "../components/profile/CurrentProfileContext"
import { useProducts, type ProdNode } from "../utils/apiOperations/productOps"

export const productMap = {
  goForDetox: {
    name: "Go for Detox",
    id: "gid://shopify/Product/8338391662867",
  },
  goForGlow: {
    name: "Go for Glow",
    id: "gid://shopify/Product/8338391695635",
  },
  goForProtectionSkincare: {
    name: "Go for Protection Skincare",
    id: "gid://shopify/Product/8338391793939",
  },
  goForProtectionDietary: {
    name: "Go For Protection Dietary",
    id: "gid://shopify/Product/8344688689427",
  },
  timeToRepair: {
    name: "Time to Repair",
    id: "gid://shopify/Product/8338391826707",
  },
  happyAge: {
    name: "Happy Age",
    id: "gid://shopify/Product/8338391859475",
  },
  sculptAndGlow: {
    name: "Sculpt & Glow",
    id: "gid://shopify/Product/8338391892243",
  },
} as const

type ProdMapType = typeof productMap

const notForChildrenProducts: ProdMapType[keyof ProdMapType]["name"][] = [
  "Go for Detox",
  "Go For Protection Dietary",
]

export type ProdNodeWithQuantity = ProdNode & { quantity: number }

export const useProfileProducts = (
  currentProfile: SolarProfile
): [ProdNodeWithQuantity[], (prod: ProdNodeWithQuantity[]) => void] => {
  const { data: productsData } = useProducts()

  const [suggestedProd, setSuggestedProd] = useState<ProdNodeWithQuantity[]>([])

  useEffect(() => {
    const antiImperfections =
      currentProfile.beautyConcern.antiImperfection ?? "0"
    const hydration = currentProfile.beautyConcern.hydration ?? "0"
    const radiance = currentProfile.beautyConcern.radiance ?? "0"
    const antiAging = currentProfile.beautyConcern.antiAge ?? "0"

    const age = currentProfile.age
    const isChildren = age === "Enfant"
    const isOver40 = age === "+ 40 ans" || age === "+ 50 ans"

    const suggestedCart: { name: ProdMapType[keyof ProdMapType]["name"]; id: string }[] = []
    if (parseInt(antiImperfections) > 2) {
      suggestedCart.push(productMap.goForDetox)
      suggestedCart.push(productMap.goForGlow)
      suggestedCart.push(productMap.goForProtectionSkincare)
    }
    if (parseInt(hydration) > 2) {
      suggestedCart.push(productMap.goForProtectionSkincare)
      suggestedCart.push(productMap.timeToRepair)
      suggestedCart.push(productMap.happyAge)
    }
    if (parseInt(radiance) > 2) {
      suggestedCart.push(productMap.goForDetox)
      suggestedCart.push(productMap.goForGlow)
      suggestedCart.push(productMap.goForProtectionSkincare)
      suggestedCart.push(productMap.sculptAndGlow)
    }

    if (parseInt(antiAging) > 2 && isOver40) {
      suggestedCart.push(productMap.goForProtectionDietary)
      suggestedCart.push(productMap.happyAge)
      suggestedCart.push(productMap.goForProtectionSkincare)
      suggestedCart.push(productMap.timeToRepair)
      suggestedCart.push(productMap.sculptAndGlow)
    }

    const suggestedCartUnique = [...new Set(suggestedCart)]

    const finalSuggestedCart = isChildren
      ? suggestedCartUnique.filter(
          (product) => !notForChildrenProducts.includes(product.name)
        )
      : suggestedCartUnique

    const suggestedProductIds: string[] = finalSuggestedCart.map(
      (product) => product.id
    )

    const suggestedProductFull = productsData?.data.products.edges
      .filter((product) => suggestedProductIds.includes(product.node.id))
      .filter((product) => product.node.availableForSale)
      .filter(
        (product) =>
          product.node.variants.edges[0]?.node.quantityAvailable &&
          product.node.variants.edges[0]?.node.quantityAvailable > 0
      )

    const suggestedProductFullWithQuantity = suggestedProductFull?.map(
      (product) => ({
        ...product.node,
        quantity: 1,
      })
    )
    setSuggestedProd(suggestedProductFullWithQuantity ?? [])
  }, [currentProfile, productsData])

  return [suggestedProd, setSuggestedProd]
}

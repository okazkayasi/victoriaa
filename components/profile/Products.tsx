import { type Dispatch, type SetStateAction } from "react"
import { type ProfileSteps } from "../../pages/3d-store"
import { addToCart } from "../../utils/apiOperations/cartOps"
import { toastSuccess } from "../../utils/toast"
import { useSolarProfile } from "../../utils/useIsFirstTime"
import { useProfileProducts } from "../../utils/useProfileProducts"
import { Button } from "../button/Button"
import { ProductCartItem } from "../profile/ProductCartItem"
import { Title } from "../typography/Typography"

export const Products = ({
  closeProfile,
  setStep,
}: {
  closeProfile: () => void
  setStep: Dispatch<SetStateAction<ProfileSteps>>
}) => {
  const { solarProfile } = useSolarProfile()

  const [suggestedProds, setSuggestedProds] = useProfileProducts(solarProfile)

  const deleteProduct = (id: string) => {
    const newSuggestedProducts = suggestedProds?.filter(
      (product) => product.id !== id
    )
    setSuggestedProds(newSuggestedProducts)
  }

  const incrementProduct = (id: string) => {
    const newSuggestedProducts = suggestedProds.map((product) => {
      if (product.id === id) {
        const newProduct = {
          ...product,
          quantity: Math.min(
            product.quantity + 1,
            product.variants.edges[0]?.node.quantityAvailable ?? 0
          ),
        }
        return newProduct
      }
      return product
    })
    setSuggestedProds(newSuggestedProducts)
  }

  const decrementProduct = (id: string) => {
    const newSuggestedProducts = suggestedProds.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: Math.max(1, product.quantity - 1),
        }
      }
      return product
    })
    setSuggestedProds(newSuggestedProducts)
  }

  const addProductsToCart = () => {
    const variantsWithQuantities = suggestedProds
      .map((prod) => ({
        variantId: prod.variants.edges[0]?.node.id,
        quantity: prod.quantity,
      }))
      .filter(({ quantity }) => quantity !== undefined && quantity > 0)
      .filter(({ variantId }) => variantId != null)

    const promises = variantsWithQuantities.map((variant) => {
      return addToCart({
        variantId: variant.variantId ?? "",
        quantity: variant.quantity,
      })
    })
    Promise.all(promises)
      .then(() => {
        toastSuccess("Products added to cart!")
        setStep("result")
        closeProfile()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  console.log(suggestedProds, "suggested products")

  return (
    <div>
      <div className="mb-11">
        <Title as="h2" size="xsmall" bold color="white">
          YOUR 100% PERSONALIZED SELECTION!
        </Title>
      </div>
      <div className="mb-6 flex h-[350px] flex-col items-center">
        <div
          className="blue-scrollbar w-full overflow-auto"
          style={{
            scrollbarColor: "blue",
          }}
        >
          <div className="flex flex-col items-center">
            <ul className="flex flex-col gap-4">
              {suggestedProds?.map((product) => (
                <li key={product.id}>
                  <ProductCartItem
                    product={product}
                    deleteProduct={deleteProduct}
                    incrementProduct={incrementProduct}
                    decrementProduct={decrementProduct}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Button
          className="w-full text-base leading-none"
          size="small"
          onClick={addProductsToCart}
        >
          ADD TO YOUR CART
        </Button>
      </div>
    </div>
  )
}

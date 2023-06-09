import { clickables, productVariantMatching } from "components/model/constants"
import Image from "next/image"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { addToCart } from "utils/apiOperations/cartOps"
import { useProducts } from "utils/apiOperations/productOps"
import { toastError, toastSuccess } from "utils/toast"
import { Products } from "../../pages/3d-store"
import { Button } from "../button/Button"
import { CloseButton } from "../button/CloseButton"
import { Text, Title } from "../typography/Typography"
import { IngredientInformation } from "./IngredientInformation"
import { Ingredients } from "./Ingredients"

type ProductsMap = Record<
  Products,
  {
    shopifyId: string
    ingredients: [string, string, string]
  }
>
const productsMap: ProductsMap = {
  go_for_protection_skincare: {
    shopifyId: "7772113502456",
    ingredients: ["prebiotics", "matcha", "hyaluronic_acid"],
  },
  time_to_detox: {
    shopifyId: "7762611962104",
    ingredients: ["prebiotics_blue", "shea_butter", "moringa_oil"],
  },
  go_for_glow: {
    shopifyId: "7769381470456",
    ingredients: ["pre_prebiotics", "pomegranate", "aloe_vera"],
  },
  time_to_repair: {
    shopifyId: "7763896991992",
    ingredients: [
      "time_to_repair_prebiotics",
      "collagen_booster",
      "thistle_oil",
    ],
  },
  happy_age: {
    shopifyId: "7762665144568",
    ingredients: [
      "happy_age_prebiotics",
      "happy_age_hyaluronic_acid",
      "stevia_oil",
    ],
  },
  sculpt_glow: {
    shopifyId: "7872984744184",
    ingredients: [
      "prebiotic_ferment",
      "vegetal_retinol",
      "golden_seaweed_extract",
    ],
  },
  go_for_detox: {
    shopifyId: "7769383174392",
    ingredients: [
      "go_for_detox_prebiotics",
      "turmeric_root_extract",
      "organic_artichoke_leaf",
    ],
  },
  go_for_protection_dietary: {
    shopifyId: "7763912917240",
    ingredients: [
      "go_for_protection_dietary_prebiotics",
      "go_for_protection_dietary_prebiotics_combination",
      "vitamins",
    ],
  },
  zero_waste: {
    shopifyId: "7769386057976",
    ingredients: ["", "", ""],
  },
  cleansing_wipe: {
    shopifyId: "7769386909944",
    ingredients: ["", "", ""],
  },
  gua_sha: {
    shopifyId: "",
    ingredients: ["", "", ""],
  },
}

export const ProductModal = ({
  productName,
  closeModal,
}: {
  productName: Products
  closeModal: () => void
}) => {
  const [displayIngredientIndex, setDisplayIngredientIndex] = useState<
    number | null
  >(null)

  const productId = clickables.find((c) => c.localName === productName)?.id

  const { data: productsData, isSuccess } = useProducts()

  const modalProduct = isSuccess
    ? productsData?.data.products.edges.find((p) =>
        p.node.id.endsWith(productId)
      )
    : undefined

  const variantId = productVariantMatching.find(
    (p) => p.productId === modalProduct?.node.id
  )?.variantId

  const { t } = useTranslation()

  const ingredients = productsMap[productName].ingredients

  const currentIng = ingredients[displayIngredientIndex ?? 0]

  const addItemToCart = async () => {
    addToCart({
      variantId,
      quantity: 1,
    }).then((data) => {
      console.log(data, "data")
      if (data?.data?.errors?.length > 0) {
        toastError("Something went wrong")
      } else {
        toastSuccess("Product added to cart")
      }
    })
  }

  return (
    <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
      <CloseButton onClick={closeModal} />
      <div className="min-h-[575px] w-[450px] bg-white bg-opacity-95 px-9 pb-12 pt-14">
        <div className="mb-3 px-9">
          <Title size="medium" bold className="mb-2.5">
            {t("common.products." + productName + ".name")}
          </Title>
          <Text size="small" className="mb-3.5">
            {t("common.products." + productName + ".subheadings")}
          </Text>
          {displayIngredientIndex == null && (
            <Text size="xsmall">
              {t("common.products." + productName + ".productFeature")}
            </Text>
          )}
        </div>
        <div className="relative">
          {displayIngredientIndex == null && (
            <div>
              <div className="mx-auto flex h-[350px] w-[300px] items-center justify-center">
                <div className="relative flex h-full w-full justify-center">
                  <div className="absolute left-1/2 top-1/2 z-20 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black">
                    {ingredients
                      .filter((i) => Boolean(i))
                      .map((ingName, index) => (
                        <Ingredients
                          ingName={ingName}
                          key={ingName}
                          index={index}
                          setDisplayIngredientIndex={setDisplayIngredientIndex}
                        />
                      ))}
                  </div>
                  {productName !== "gua_sha" && (
                    <Image
                      src={"/productImages/" + productName + ".png"}
                      alt={productName}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Title as="p" size="medium" bold className="mb-3">
                  {t("common.products." + productName + ".price")}
                </Title>
                <Button variant="outlined" size="small" onClick={addItemToCart}>
                  {t("common.cart.add_to_cart_button")}
                </Button>
              </div>
            </div>
          )}
          {displayIngredientIndex != null && currentIng && (
            <IngredientInformation
              setDisplayIngredientIndex={setDisplayIngredientIndex}
              currentIng={currentIng}
            />
          )}
        </div>
      </div>
    </div>
  )
}

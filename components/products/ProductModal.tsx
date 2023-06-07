import Image from "next/image"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Products } from "../../pages/3d-store"
import { Button } from "../button/Button"
import { CloseButton } from "../button/CloseButton"
import { Text, Title } from "../typography/Typography"
import { IngredientInformation } from "./IngredientInformation"
import { Ingredients } from "./Ingredients"

const ingredientsMap: Record<Products, string[]> = {
  go_for_protection_skincare: ["prebiotics", "matcha", "hyaluronic_acid"],
  time_to_detox: ["prebiotics_blue", "shea_butter", "moringa_oil"],
  go_for_glow: ["pre_prebiotics", "pomegranate", "aloe_vera"],
  time_to_repair: [
    "time_to_repair_prebiotics",
    "collagen_booster",
    "thistle_oil",
  ],
  happy_age: [
    "happy_age_prebiotics",
    "happy_age_hyaluronic_acid",
    "stevia_oil",
  ],
  sculpt_glow: [
    "prebiotic_ferment",
    "vegetal_retinol",
    "golden_seaweed_extract",
  ],
  go_for_detox: [
    "go_for_detox_prebiotics",
    "turmeric_root_extract",
    "organic_artichoke_leaf",
  ],
  go_for_protection_dietary: [
    "go_for_protection_dietary_prebiotics",
    "go_for_protection_dietary_prebiotics_combination",
    "vitamins",
  ],
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

  const { t } = useTranslation()

  const ingredients = ingredientsMap[productName]

  const currentIng = ingredients[displayIngredientIndex ?? 0]

  return (
    <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
      <CloseButton onClick={closeModal} />
      <div className="min-h-[575px] w-[450px] bg-white bg-opacity-80 px-9 pb-12 pt-14">
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
                    {ingredients.map((ingName, index) => (
                      <Ingredients
                        ingName={ingName}
                        key={ingName}
                        index={index}
                        setDisplayIngredientIndex={setDisplayIngredientIndex}
                      />
                    ))}
                  </div>
                  <Image
                    src={"/productImages/" + productName + ".png"}
                    alt={productName}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Title as="p" size="medium" bold className="mb-3">
                  {t("common.products." + productName + ".price")}
                </Title>
                <Button variant="outlined" size="small">
                  AJOUTEZ AU PANIER
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

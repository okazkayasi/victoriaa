import Image from "next/image"
import { type Dispatch, type SetStateAction } from "react"
import { useTranslation } from "react-i18next"
import { Text } from "../typography/Typography"

export const Ingredients = ({
  ingName,
  index,
  setDisplayIngredientIndex,
}: {
  ingName: string
  index: number
  setDisplayIngredientIndex: Dispatch<SetStateAction<number | null>>
}) => {
  const { t } = useTranslation()

  const firstMainStyle = "z-20 absolute left-0 top-0 h-32 w-32 -translate-x-10"
  const firstTextStyle = "absolute w-full text-center top-20"

  const secondMainStyle = "absolute bottom-0 left-0 h-32 w-32 -translate-x-10"
  const secondTextStyle = "absolute w-full text-center top-20"

  const thirdMainStyle = "absolute -right-1/4 top-1/4 h-32 w-32 -translate-x-4"
  const thirdTextStyle = "absolute w-full text-center top-24"

  const mainStyles = [firstMainStyle, secondMainStyle, thirdMainStyle]
  const textStyles = [firstTextStyle, secondTextStyle, thirdTextStyle]

  return (
    <button onClick={() => setDisplayIngredientIndex(index)}>
      <div className={mainStyles[index]}>
        <div>
          <Image
            src={"/ingredientImages/" + ingName + ".png"}
            alt={ingName}
            width={80}
            height={50}
            className="mx-auto object-contain"
          />
          <Text size="small" className={textStyles[index]} bold>
            {t("common.ingredients." + ingName + ".ingredientName")}
          </Text>
        </div>
      </div>
    </button>
  )
}

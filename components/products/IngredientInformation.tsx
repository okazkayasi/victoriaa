import clsx from "clsx"
import Image from "next/image"
import { type Dispatch, type SetStateAction } from "react"
import { useTranslation } from "react-i18next"
import { CloseButton } from "../button/CloseButton"
import { Text, Title, montserrat } from "../typography/Typography"

export const IngredientInformation = ({
  setDisplayIngredientIndex,
  currentIng,
}: {
  setDisplayIngredientIndex: Dispatch<SetStateAction<number | null>>
  currentIng: string
}) => {
  const { t } = useTranslation()
  return (
    <div className="bg-white">
      <CloseButton
        onClick={() => {
          setDisplayIngredientIndex(null)
        }}
      />
      <div className="bg-white px-8 pb-4 pt-12">
        <Title size="medium" bold className="mb-2.5">
          {t("common.ingredients." + currentIng + ".ingredientName")}
        </Title>
        <Image
          src={"/ingredientImages/" + currentIng + ".png"}
          alt={currentIng}
          width={120}
          height={100}
          className="mx-auto mb-7.5 object-contain"
        />
        <div className="h-[150px] overflow-hidden">
          <div className="h-full overflow-auto">
            <div className="mb-4">
              <Text size="small" bold className="mb-3">
                Features
              </Text>
              <ul className="list-inside list-disc">
                {t("common.ingredients." + currentIng + ".ingredientFeatures", {
                  returnObjects: true,
                }).map((feature: string, index: number) => (
                  <li
                    key={index}
                    className={clsx("text-xs", montserrat.className)}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <div>
                <Text size="small" bold className="mb-3">
                  Other informations
                </Text>
                <ul className="list-inside list-disc">
                  {t("common.ingredients." + currentIng + ".otherInfo", {
                    returnObjects: true,
                  }).map((feature: string, index: number) => (
                    <li
                      key={index}
                      className={clsx("text-xs", montserrat.className)}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

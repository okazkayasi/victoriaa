import clsx from "clsx"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { twMerge } from "tailwind-merge"
import { Text } from "../typography/Typography"

type Color = "black" | "white"

export const NumberCounter = (props: {
  color?: Color
  quantity: number
  product: PureCartProd
  incrementItem: () => void
  decrementItem: () => void
}) => {
  const isBlack = props.color === "black"

  return (
    <div className="flex flex-col">
      <div
        className={clsx(
          "flex items-center rounded border",
          isBlack && "border-black",
          !isBlack && "border-white"
        )}
      >
        <div className="px-3">
          <button
            className={clsx(
              props.product.quantity === 1
                ? "text-gray-400"
                : isBlack
                ? "text-black"
                : "text-white"
            )}
            onClick={props.decrementItem}
            disabled={props.product.quantity === 1}
          >
            -
          </button>
        </div>
        <Text size="xsmall" color={isBlack ? "black" : "white"} bold>
          {props?.quantity ?? 0}
        </Text>
        <div className="px-3">
          <button
            className={clsx(
              props.product.quantity === props.product.quantityAvailable
                ? "text-gray-500"
                : isBlack
                ? "text-black"
                : "text-white"
            )}
            onClick={props.incrementItem}
            disabled={
              props.product.quantity === props.product.quantityAvailable
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

type PureCartProd = {
  amount: string
  imageSrc: string
  title: string
  quantity: number
  quantityAvailable: number
}

type PureCartItemType = {
  className?: string
  color?: "white" | "black"
  product: PureCartProd
  deleteItem: () => void
  incrementItem: () => void
  decrementItem: () => void
}

export const PureCartItem = ({
  product,
  className,
  color,
  deleteItem,
  incrementItem,
  decrementItem,
}: PureCartItemType) => {
  const { t } = useTranslation()
  const isBlack = color === "black"
  return (
    <div className={clsx("flex items-center justify-start gap-7.5", className)}>
      <div className="relative h-[82px] min-w-[80px] pt-2">
        <Image
          alt={product.title}
          src={product.imageSrc}
          fill
          className="object-contain"
        />
      </div>
      <div>
        <div>
          <div className="mb-3">
            <Text
              size="small"
              bold
              color={isBlack ? "black" : "white"}
              className="pb-1 text-[11px]"
            >
              {product.amount}€
            </Text>
            <Text size="small" color={isBlack ? "black" : "white"} bold>
              {product.title}
            </Text>
          </div>
          <div className="flex">
            <NumberCounter
              color={color}
              quantity={product.quantity}
              product={product}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
            />
            <button className={clsx("ml-3 p-0 text-p-xs")} onClick={deleteItem}>
              <Text
                size="xsmall"
                className={twMerge(
                  "underline",
                  isBlack ? "text-black" : "text-white"
                )}
              >
                {t("common.cart.delete_item_button_text")}
              </Text>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

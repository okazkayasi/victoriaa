import { Text } from "../typography/Typography"

type CartSummaryItemProps = {
  leftText: string
  rightText: string
  size: "small" | "medium" | "large"
  icon?: React.ReactNode
}
export const CartSummaryItem = (props: CartSummaryItemProps) => {
  const isBold = props.size === "large"
  return (
    <div className="flex justify-between">
      <div className="align-center flex gap-2">
        {props.icon && props.icon}
        <Text color="white" size={props.size} bold={isBold}>
          {props.leftText}
        </Text>
      </div>
      <Text color="white" size={props.size} bold={isBold}>
        {props.rightText}
      </Text>
    </div>
  )
}

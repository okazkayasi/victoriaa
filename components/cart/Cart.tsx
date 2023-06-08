import { useTranslation } from "react-i18next"
import { useCurrentCart } from "../../utils/hooks/useCurrentCart"
import { Button } from "../button/Button"
import { CloseButton } from "../button/CloseButton"
import { CartItem } from "../cart/CartItem"
import { DiscountIcon } from "../shapes/DiscountIcon"
import { Text, Title } from "../typography/Typography"
import { CartSummaryItem } from "./CartSummaryItem"

const calculateTax = (subtotal: string, total: string) => {
  const taxAmount = parseFloat(total) - parseFloat(subtotal)
  const taxAmountText = isNaN(taxAmount) ? "0" : taxAmount.toFixed(1) + "€"

  const taxPercentage = (taxAmount * 100) / parseFloat(subtotal)

  return {
    taxAmount: taxAmountText,
    taxPercentage: isNaN(taxPercentage) ? "0" : taxPercentage.toFixed(0) + "%",
  }
}

export const Cart = ({ closeCart }: { closeCart: () => void }) => {
  const { t } = useTranslation()
  const { cart, refetch: refetchCart } = useCurrentCart()
  const numberOfItems = cart?.data?.cart.totalQuantity || 0
  const subtotal = (cart?.data.cart.cost.subtotalAmount.amount || "0") + "€"
  const total = (cart?.data.cart.cost.totalAmount.amount || "0") + "€"

  const { taxAmount, taxPercentage } = calculateTax(subtotal, total)

  const hasDiscount = false

  console.log(cart, "cart here")

  return (
    <div className="absolute left-1/2 top-1/2  z-20 -translate-x-1/2 -translate-y-1/2">
      <CloseButton onClick={closeCart} />
      <div className="relative w-[450px] bg-white bg-opacity-80">
        <div className="h-[420px] overflow-hidden">
          <div className="h-[420px] overflow-y-auto px-18 py-14">
            {numberOfItems > 0 ? (
              <div>
                <div className="pb-3.5">
                  <Title size="medium" color="main" bold className="mb-2.5">
                    {t("common.cart.title")} ({numberOfItems})
                  </Title>
                  <Text size="xsmall" color="black">
                    {t("common.cart.non_empty_text")}
                  </Text>
                </div>
                <div className="h-2 rounded-3xl bg-black" />
                <div>
                  <div className="py-13">
                    <ul className="flex flex-col gap-7.5">
                      {cart?.data.cart.lines.edges.map((item) => {
                        return (
                          <li key={item.node.id}>
                            <CartItem product={item.node} color="black" />
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="pb-3.5">
                  <Title size="medium" color="main" bold className="mb-2.5">
                    {t("common.cart.title")} ({numberOfItems})
                  </Title>
                  <Text size="xsmall" color="black">
                    {t("common.cart.empty_text")}
                  </Text>
                </div>
              </div>
            )}
          </div>
        </div>
        {numberOfItems > 0 && (
          <div className="bg-main px-18 pb-7.5 pt-2.5">
            <div>
              <div>
                <div className="mb-2.5 flex flex-col gap-3">
                  <div>
                    <CartSummaryItem
                      leftText={t("common.cart.summary_subtotal_text")}
                      rightText={subtotal}
                      size="small"
                    />
                  </div>
                  {hasDiscount && (
                    <div>
                      <CartSummaryItem
                        leftText={t("common.cart.summary_discount_text")}
                        rightText="-1.00€"
                        icon={<DiscountIcon />}
                        size="small"
                      />
                    </div>
                  )}
                  {taxPercentage !== "0%" && (
                    <div>
                      <CartSummaryItem
                        leftText={`Tax - ${taxPercentage}`}
                        rightText={taxAmount} //eur
                        size="small"
                      />
                    </div>
                  )}
                  <div>
                    <CartSummaryItem
                      leftText={t("common.cart.summary_total_text")}
                      rightText={total} //eur
                      size="medium"
                    />
                  </div>
                </div>
                <a href={cart.data.cart.checkoutUrl} target="_blank">
                  <Button className="mx-auto w-full text-p-sm" size="small">
                    {t("common.cart.checkout_button_text")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

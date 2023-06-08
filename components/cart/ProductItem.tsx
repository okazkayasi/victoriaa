import { addToCart } from "../../utils/apiOperations/cartOps"
import { ProdNode } from "../../utils/apiOperations/productOps"
import { Button } from "../button/Button"
import { Title } from "../typography/Typography"

export const ProductItem = ({ product }: { product: ProdNode }) => {
  return (
    <div>
      <div>
        <Title as="h2" color="black" bold size="medium">
          {product.title}
        </Title>
      </div>
      <div>
        <Title as="h3" color="black" bold className="text-p-sm">
          Variants
        </Title>
        <ul>
          {product.variants.edges?.map((variant) => (
            <li key={variant.node.id}>
              <div>
                <p>id: {variant.node.id}</p>
                <p>price: {variant.node.price.amount}</p>
                <p>quantityAvailable: {variant.node.quantityAvailable}</p>
              </div>
              <Button
                variant="outlined"
                onClick={() => {
                  void addToCart({
                    variantId: variant.node.id,
                    quantity: 1,
                  })
                }}
              >
                Add to cart
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

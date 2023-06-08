import { Products } from "pages/3d-store"

export const CenterY = 70.8
export const CenterX = 0.05
export const CenterZ = -0.104
export const STAY_ON_PLATFORM = false
export const MOVE_SPEED = 0.02
export const TURN_SPEED = 6

export const HIDE_CIRCLES_DISTANCE = 1.5
export const CIRCLE_OFFSET = 2.5
export const FAR_CIRCLE_OFFSET = 10

export const CENTERS = [CenterX, CenterY, CenterZ] as const

export const circlePositions: {
  name: `circle${string}`
  position: [number, number, number]
  size: number
}[] = [
  { name: "circleCenter", position: [CenterX, CenterY, CenterZ], size: 0.1 },
  {
    name: "circleOne",
    position: [CenterX + CIRCLE_OFFSET, CenterY, CenterZ + CIRCLE_OFFSET],
    size: 0.1,
  },
  {
    name: "circleTWo",
    position: [CenterX + CIRCLE_OFFSET, CenterY, CenterZ - CIRCLE_OFFSET],
    size: 0.1,
  },
  {
    name: "circleThree",
    position: [CenterX - CIRCLE_OFFSET, CenterY, CenterZ + CIRCLE_OFFSET],
    size: 0.1,
  },
  {
    name: "circleFour",
    position: [CenterX - CIRCLE_OFFSET, CenterY, CenterZ - CIRCLE_OFFSET],
    size: 0.1,
  },
  {
    name: "circleFarOne",
    position: [CenterX + FAR_CIRCLE_OFFSET, CenterY, CenterZ],
    size: 0.2,
  },
  {
    name: "circleFarTwo",
    position: [CenterX - FAR_CIRCLE_OFFSET, CenterY, CenterZ],
    size: 0.2,
  },
  {
    name: "circleFarThree",
    position: [CenterX, CenterY, CenterZ + FAR_CIRCLE_OFFSET],
    size: 0.2,
  },
  {
    name: "circleFarFour",
    position: [CenterX, CenterY, CenterZ - FAR_CIRCLE_OFFSET],
    size: 0.2,
  },
]

export const clickableNames = [
  "go_for_detox_LOD1",
  "go_for_protection_LOD1002",
  "go_for_protection_LOD1003",
  "go_for_detox_LOD1002",
  "go_for_protection_LOD1004",
  "go_for_protection_LOD1001",
  "new_glow001",
  "happy_age_LOD1002",
  "new_repair",
  "happy_age_LOD1001",
  "new_detox",
  "new_glow002",
  "happy_age_LOD1003",
  "new_protection",
  "new_repair002",
  "sculpt_and_glow_LOD1",
  "new_detox002",
  "new_glow003",
  "key",
  "SM_guasha",
  "lingette002",
  "étuilingette",
  "lingette001",
] as const

export type ClickableName = (typeof clickableNames)[number]

export type Clickable = {
  name: ClickableName
  localName: Products
  id: string
}

export const clickables: Clickable[] = [
  {
    name: "go_for_detox_LOD1",
    localName: "go_for_detox",
    id: "7769383174392",
  },
  {
    name: "go_for_protection_LOD1002",
    localName: "go_for_protection_skincare",
    id: "7772113502456",
  },
  {
    name: "go_for_protection_LOD1003",
    localName: "go_for_protection_skincare",
    id: "7772113502456",
  },
  {
    name: "go_for_detox_LOD1002",
    localName: "go_for_detox",
    id: "7769383174392",
  },
  {
    name: "go_for_protection_LOD1004",
    localName: "go_for_protection_skincare",
    id: "7772113502456",
  },
  {
    name: "go_for_protection_LOD1001",
    localName: "go_for_protection_skincare",
    id: "7772113502456",
  },
  {
    name: "new_glow001",
    localName: "go_for_glow",
    id: "7769381470456",
  },
  {
    name: "happy_age_LOD1002",
    localName: "happy_age",
    id: "7762665144568",
  },
  {
    name: "new_repair",
    localName: "time_to_repair",
    id: "7763896991992",
  },
  {
    name: "happy_age_LOD1001",
    localName: "sculpt_glow",
    id: "7872984744184",
  },
  {
    name: "new_detox",
    localName: "time_to_detox",
    id: "7762611962104",
  },
  {
    name: "new_glow002",
    localName: "go_for_glow",
    id: "7769381470456",
  },
  {
    name: "happy_age_LOD1003",
    localName: "happy_age",
    id: "7762665144568",
  },
  {
    name: "new_protection",
    localName: "go_for_protection_dietary",
    id: "7763912917240",
  },
  {
    name: "new_repair002",
    localName: "time_to_repair",
    id: "7763896991992",
  },
  {
    name: "sculpt_and_glow_LOD1",
    localName: "sculpt_glow",
    id: "7872984744184",
  },
  {
    name: "new_detox002",
    localName: "time_to_detox",
    id: "7762611962104",
  },
  {
    name: "new_glow003",
    localName: "go_for_glow",
    id: "7769381470456",
  },
  {
    name: "key",
    localName: "zero_waste",
    id: "7769386057976",
  },
  {
    name: "SM_guasha",
    localName: "gua_sha",
    id: "",
  },
  {
    name: "lingette002",
    localName: "cleansing_wipe",
    id: "7769386909944",
  },
  {
    name: "étuilingette",
    localName: "cleansing_wipe",
    id: "7769386909944",
  },
  {
    name: "lingette001",
    localName: "cleansing_wipe",
    id: "7769386909944",
  },
]

export const productVariantMatching = [
  {
    productId: "gid://shopify/Product/8344688689427",
    variantId: "gid://shopify/ProductVariant/45133384778003",
  },
  {
    productId: "gid://shopify/Product/8412755919123",
    variantId: "gid://shopify/ProductVariant/45451813486867",
  },
  {
    productId: "gid://shopify/Product/8412755984659",
    variantId: "gid://shopify/ProductVariant/45451813519635",
  },
  {
    productId: "gid://shopify/Product/8412756214035",
    variantId: "gid://shopify/ProductVariant/45451815321875",
  },
  {
    productId: "gid://shopify/Product/8412756672787",
    variantId: "gid://shopify/ProductVariant/45451818238227",
  },
  {
    productId: "gid://shopify/Product/8412756771091",
    variantId: "gid://shopify/ProductVariant/45451818828051",
  },
  {
    productId: "gid://shopify/Product/8412756902163",
    variantId: "gid://shopify/ProductVariant/45451819450643",
  },
  {
    productId: "gid://shopify/Product/8412757000467",
    variantId: "gid://shopify/ProductVariant/45451820073235",
  },
  {
    productId: "gid://shopify/Product/8412757262611",
    variantId: "gid://shopify/ProductVariant/45451821252883",
  },
  {
    productId: "gid://shopify/Product/8412758343955",
    variantId: "gid://shopify/ProductVariant/45451833278739",
  },
  {
    productId: "gid://shopify/Product/8412758835475",
    variantId: "gid://shopify/ProductVariant/45451836653843",
  },
  {
    productId: "gid://shopify/Product/8412759752979",
    variantId: "gid://shopify/ProductVariant/45451844026643",
  },
  {
    productId: "gid://shopify/Product/8412759916819",
    variantId: "gid://shopify/ProductVariant/45451845173523",
  },
  {
    productId: "gid://shopify/Product/8412760703251",
    variantId: "gid://shopify/ProductVariant/45451854479635",
  },
  {
    productId: "gid://shopify/Product/8412761620755",
    variantId: "gid://shopify/ProductVariant/45451859984659",
  },
  {
    productId: "gid://shopify/Product/8412762505491",
    variantId: "gid://shopify/ProductVariant/45451866472723",
  },
  {
    productId: "gid://shopify/Product/8412763619603",
    variantId: "gid://shopify/ProductVariant/45451875877139",
  },
  {
    productId: "gid://shopify/Product/8412763816211",
    variantId: "gid://shopify/ProductVariant/45451876991251",
  },
  {
    productId: "gid://shopify/Product/8412764012819",
    variantId: "gid://shopify/ProductVariant/45451878957331",
  },
  {
    productId: "gid://shopify/Product/8412764111123",
    variantId: "gid://shopify/ProductVariant/45451882004755",
  },
  {
    productId: "gid://shopify/Product/8412764832019",
    variantId: "gid://shopify/ProductVariant/45451887116563",
  },
  {
    productId: "gid://shopify/Product/8412764930323",
    variantId: "gid://shopify/ProductVariant/45451887149331",
  },
  {
    productId: "gid://shopify/Product/8412765225235",
    variantId: "gid://shopify/ProductVariant/45451888918803",
  },
  {
    productId: "gid://shopify/Product/8412765520147",
    variantId: "gid://shopify/ProductVariant/45451891671315",
  },
  {
    productId: "gid://shopify/Product/8412765913363",
    variantId: "gid://shopify/ProductVariant/45451897667859",
  },
  {
    productId: "gid://shopify/Product/8412766142739",
    variantId: "gid://shopify/ProductVariant/45451899404563",
  },
  {
    productId: "gid://shopify/Product/8412767256851",
    variantId: "gid://shopify/ProductVariant/45451907694867",
  },
  {
    productId: "gid://shopify/Product/8412768141587",
    variantId: "gid://shopify/ProductVariant/45451916869907",
  },
  {
    productId: "gid://shopify/Product/8412768764179",
    variantId: "gid://shopify/ProductVariant/45451920998675",
  },
  {
    productId: "gid://shopify/Product/8412768928019",
    variantId: "gid://shopify/ProductVariant/45451921228051",
  },
  {
    productId: "gid://shopify/Product/8412769583379",
    variantId: "gid://shopify/ProductVariant/45451925881107",
  },
  {
    productId: "gid://shopify/Product/8412770140435",
    variantId: "gid://shopify/ProductVariant/45451929944339",
  },
  {
    productId: "gid://shopify/Product/8412770337043",
    variantId: "gid://shopify/ProductVariant/45451931648275",
  },
  {
    productId: "gid://shopify/Product/8412770468115",
    variantId: "gid://shopify/ProductVariant/45451932926227",
  },
  {
    productId: "gid://shopify/Product/8412770861331",
    variantId: "gid://shopify/ProductVariant/45451935678739",
  },
  {
    productId: "gid://shopify/Product/8412771156243",
    variantId: "gid://shopify/ProductVariant/45451938136339",
  },
  {
    productId: "gid://shopify/Product/8412771418387",
    variantId: "gid://shopify/ProductVariant/45451940331795",
  },
  {
    productId: "gid://shopify/Product/8412771778835",
    variantId: "gid://shopify/ProductVariant/45451944001811",
  },
]

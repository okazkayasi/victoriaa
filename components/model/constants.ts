import { Products } from "pages/3d-store"

export const CenterY = 70.8
export const CenterX = 0.05
export const CenterZ = -0.104
export const STAY_ON_PLATFORM = true
export const MOVE_SPEED = 0.02
export const TURN_SPEED = 6

export const HIDE_CIRCLES_DISTANCE = 1.5
export const CIRCLE_OFFSET = 2.5

export const CENTERS = [CenterX, CenterY, CenterZ] as const

export const circlePositions: {
  name: `circle${string}`
  position: [number, number, number]
}[] = [
  { name: "circleCenter", position: [CenterX, CenterY, CenterZ] },
  {
    name: "circleOne",
    position: [CenterX + CIRCLE_OFFSET, CenterY, CenterZ + CIRCLE_OFFSET],
  },
  {
    name: "circleTWo",
    position: [CenterX + CIRCLE_OFFSET, CenterY, CenterZ - CIRCLE_OFFSET],
  },
  {
    name: "circleThree",
    position: [CenterX - CIRCLE_OFFSET, CenterY, CenterZ + CIRCLE_OFFSET],
  },
  {
    name: "circleFour",
    position: [CenterX - CIRCLE_OFFSET, CenterY, CenterZ - CIRCLE_OFFSET],
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

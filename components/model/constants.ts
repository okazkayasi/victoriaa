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
  "new_protection001",
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

export type Clickable = {
  name: (typeof clickableNames)[number]
  id: string
}

export const clickables: Clickable[] = [
  {
    name: "go_for_detox_LOD1",
    id: "",
  },
  {
    name: "go_for_protection_LOD1002",
    id: "",
  },
  {
    name: "go_for_protection_LOD1003",
    id: "",
  },
  {
    name: "go_for_detox_LOD1002",
    id: "",
  },
  {
    name: "go_for_protection_LOD1004",
    id: "",
  },
  {
    name: "go_for_protection_LOD1001",
    id: "",
  },
  {
    name: "new_glow001",
    id: "",
  },
  {
    name: "happy_age_LOD1002",
    id: "",
  },
  {
    name: "new_repair",
    id: "",
  },
  {
    name: "happy_age_LOD1001",
    id: "",
  },
  {
    name: "new_detox",
    id: "",
  },
  {
    name: "new_glow002",
    id: "",
  },
  {
    name: "happy_age_LOD1003",
    id: "",
  },
  {
    name: "new_protection001",
    id: "",
  },
  {
    name: "new_repair002",
    id: "",
  },
  {
    name: "sculpt_and_glow_LOD1",
    id: "",
  },
  {
    name: "new_detox002",
    id: "",
  },
  {
    name: "new_glow003",
    id: "",
  },
  {
    name: "key",
    id: "",
  },
  {
    name: "SM_guasha",
    id: "",
  },
  {
    name: "lingette002",
    id: "",
  },
  {
    name: "étuilingette",
    id: "",
  },
  {
    name: "lingette001",
    id: "",
  },
]

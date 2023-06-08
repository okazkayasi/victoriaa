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

const clickableNames = [
  "go_for_detox_LOD1",
  "go_for_protection_LOD1.002",
  "go_for_protection_LOD1.003",
  "go_for_detox_LOD1.002",
  "go_for_protection_LOD1.004",
  "go_for_protection_LOD1.001",
  "new_glow.001",
  "happy age LOD1.002",
  "new_repair",
  "happy age LOD1.001",
  "new_detox",
  "new_glow.002",
  "happy age LOD1.003",
  "new_protection.001",
  "new_repair.002",
  "sculpt and glow LOD1",
  "new_detox.002",
  "new_glow.003",
  "key",
  "SM_guasha",
  "lingette.002",
  "étuilingette",
  "lingette.001",
] as const

type Clickable = {
  name: (typeof clickableNames)[number]
  id: string
}

export const clickables: Clickable[] = [
  {
    name: "go_for_detox_LOD1",
    id: "",
  },
  {
    name: "go_for_protection_LOD1.002",
    id: "",
  },
  {
    name: "go_for_protection_LOD1.003",
    id: "",
  },
  {
    name: "go_for_detox_LOD1.002",
    id: "",
  },
  {
    name: "go_for_protection_LOD1.004",
    id: "",
  },
  {
    name: "go_for_protection_LOD1.001",
    id: "",
  },
  {
    name: "new_glow.001",
    id: "",
  },
  {
    name: "happy age LOD1.002",
    id: "",
  },
  {
    name: "new_repair",
    id: "",
  },
  {
    name: "happy age LOD1.001",
    id: "",
  },
  {
    name: "new_detox",
    id: "",
  },
  {
    name: "new_glow.002",
    id: "",
  },
  {
    name: "happy age LOD1.003",
    id: "",
  },
  {
    name: "new_protection.001",
    id: "",
  },
  {
    name: "new_repair.002",
    id: "",
  },
  {
    name: "sculpt and glow LOD1",
    id: "",
  },
  {
    name: "new_detox.002",
    id: "",
  },
  {
    name: "new_glow.003",
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
    name: "lingette.002",
    id: "",
  },
  {
    name: "étuilingette",
    id: "",
  },
  {
    name: "lingette.001",
    id: "",
  },
]

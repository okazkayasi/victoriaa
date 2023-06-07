export const CenterY = 70.8
export const CenterX = 0.05
export const CenterZ = -0.104
export const STAY_ON_PLATFORM = true
export const MOVE_SPEED = 0.02
export const TURN_SPEED = 6

export const CIRCLE_OFFSET = 2.7

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

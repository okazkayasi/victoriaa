import { RootState } from "@react-three/fiber"
import { Mesh } from "three"
import { HIDE_CIRCLES_DISTANCE } from "./constants"

export const showHideCircles = (state: RootState, circle: Mesh) => {
  const dist = circle.position.distanceTo(state.camera.position)
  if (dist < HIDE_CIRCLES_DISTANCE) {
    circle.visible = false
  } else {
    circle.visible = true
  }
}

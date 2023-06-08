import { RootState } from "@react-three/fiber"
import { useEffect, useState } from "react"
import * as THREE from "three"
import { CENTERS, MOVE_SPEED, STAY_ON_PLATFORM, TURN_SPEED } from "./constants"

export const usePersonControls = () => {
  const keys = {
    ArrowUp: "forward",
    ArrowDown: "backward",
    ArrowLeft: "left",
    ArrowRight: "right",
  }

  const moveFieldByKey = (key) => keys[key]

  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
  })

  useEffect(() => {
    const handleKeyDown = (e) => {
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }))
    }
    const handleKeyUp = (e) => {
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }))
    }
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("keyup", handleKeyUp)
    }
  }, [])
  return movement
}

export const move = (state: RootState, controlRef: any, forward: boolean) => {
  const moveSpeed = forward ? MOVE_SPEED : -1 * MOVE_SPEED
  const cameraDirection = new THREE.Vector3()
  state.camera.getWorldDirection(cameraDirection)
  cameraDirection.y = 0
  const newPosition = state.camera.position
    .clone()
    .addScaledVector(cameraDirection, moveSpeed)

  const newDistToCenter = newPosition.distanceTo(new THREE.Vector3(...CENTERS))
  const oldDistToCenter = state.camera.position.distanceTo(
    new THREE.Vector3(...CENTERS)
  )

  if (
    !STAY_ON_PLATFORM ||
    newDistToCenter < 5 ||
    newDistToCenter < oldDistToCenter
  ) {
    state.camera.position.addScaledVector(cameraDirection, moveSpeed)
    controlRef.target.addScaledVector(cameraDirection, moveSpeed)
    console.log(state.camera.position)
  }
}

export const rotate = (
  state: RootState,
  controlRef: any,
  right: boolean,
  action: "start" | "stop"
) => {
  if (action === "stop") {
    controlRef.autoRotate = false
    controlRef.enableRotate = true
  }

  if (action === "start") {
    const turnSpeed = right ? -1 * TURN_SPEED : TURN_SPEED
    controlRef.autoRotateSpeed = turnSpeed
    controlRef.autoRotate = true
  }
}

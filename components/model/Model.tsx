import { OrbitControls, useGLTF } from "@react-three/drei"
import { ThreeEvent, useFrame } from "@react-three/fiber"
import { useEffect, useMemo, useRef } from "react"
import { Vector3 } from "three"
import { Circle } from "./Circle"
import {
  CENTERS,
  Clickable,
  HIDE_CIRCLES_DISTANCE,
  circlePositions,
  clickableNames,
} from "./constants"
import { move, rotate, usePersonControls } from "./usePersonControls"
import { scaleProductsUpAndDown, useRaycaster } from "./useRaycaster"

export const TheModel = ({
  lerping,
  setLerping,
  target,
  setTarget,
}: {
  lerping: boolean
  setLerping: (lerping: boolean) => void
  target: Vector3
  setTarget: (target: Vector3) => void
}) => {
  const controlRef = useRef(null)

  const { forward, backward, left, right } = usePersonControls()

  // const gltf = useGLTF("/glb/demain_beauty.glb")
  const gltf = useGLTF(
    "https://victoria-vr.s3.us-east-2.amazonaws.com/demain_beauty.glb"
  )
  const { scene } = gltf
  // console.log(scene, 'thisi s the scene')

  const clickableObjects = scene.children.filter(
    ({ name }) => clickableNames.indexOf(name as Clickable["name"]) > -1
  )

  const circles = useMemo(() => {
    const onDoubleClick = (e: ThreeEvent<MouseEvent>) => {
      const { object } = e
      const { position } = object
      const { x, y, z } = position
      // check if too close to camera
      if (e.camera.position.distanceTo(position) < HIDE_CIRCLES_DISTANCE) {
        return
      }

      const vector = new Vector3(x, y, z)
      setTarget(vector)
      setLerping(true)
    }

    const circles = circlePositions.map((c) => {
      return (
        <Circle
          position={c.position}
          key={c.name}
          name={c.name}
          onDoubleClick={onDoubleClick}
        />
      )
    })
    return circles
  }, [])

  const intersects = useRaycaster()

  const dblClickListener = (e: MouseEvent) => {}
  useEffect(() => {
    window.addEventListener("dblclick", dblClickListener)

    return () => {
      window.removeEventListener("dblclick", dblClickListener)
    }
  }, [])

  useFrame((state, delta) => {
    scaleProductsUpAndDown(intersects, clickableObjects)
    if (backward || forward || left || right) {
      setLerping(false)
      setTarget(state.camera.position)
    } else {
      // make the circles bigger
    }
    if (forward || backward) {
      move(state, controlRef.current, forward)
    }
    if (left || right) {
      rotate(state, controlRef.current, right, "start")
    } else {
      rotate(state, controlRef.current, right, "stop")
    }

    if (lerping) {
      state.camera.position.lerp(target, delta * 2)
      const targetVec = new Vector3(
        target.x * 1.001,
        target.y,
        target.z * 1.001
      )
      controlRef.current.target.lerp(targetVec, delta * 2)
    }
  })

  return (
    <group>
      <OrbitControls
        target={[...CENTERS]}
        reverseOrbit={true}
        enablePan={false}
        enableZoom={false}
        ref={controlRef}
      />
      <primitive object={scene} />
      <ambientLight intensity={2} />
      {circles}
    </group>
  )
}

import { OrbitControls, useGLTF } from "@react-three/drei"
import { ThreeEvent, useFrame, useLoader } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import { Vector3 } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Circle } from "./Circle"
import { CENTERS, circlePositions } from "./constants"
import { move, rotate, usePersonControls } from "./usePersonControls"

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

  const gltf = useLoader(GLTFLoader, "/glb/demain_beauty.glb")
  const { scene } = useGLTF("/glb/demain_beauty.glb")

  const circles = useMemo(() => {
    const onDoubleClick = (e: ThreeEvent<MouseEvent>) => {
      const { object } = e
      const { position } = object
      const { x, y, z } = position
      const vector = new Vector3(x, y, z)
      setTarget(vector)
      setLerping(true)

      // e.camera.position.lerp(vector, 0.1)
      // controlRef.current.target.set(x * 1.001, y, z * 1.001)
    }

    const circles = circlePositions.map((c) => {
      return (
        <Circle
          position={c.position}
          key={c.name}
          onDoubleClick={onDoubleClick}
        />
      )
    })
    return circles
  }, [])

  useFrame((state, delta) => {
    // check if movement

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

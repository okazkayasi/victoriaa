import { OrbitControls, useGLTF } from "@react-three/drei"
import { ThreeEvent, useFrame, useLoader } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Circle } from "./Circle"
import { CENTERS, circlePositions } from "./constants"
import { move, rotate, usePersonControls } from "./usePersonControls"

export const TheModel = () => {
  const controlRef = useRef(null)

  const { forward, backward, left, right } = usePersonControls()

  const gltf = useLoader(GLTFLoader, "/glb/demain_beauty.glb")
  const { scene } = useGLTF("/glb/demain_beauty.glb")

  const circles = useMemo(() => {
    const onDoubleClick = (e: ThreeEvent<MouseEvent>) => {
      const { object } = e
      const { position } = object
      const { x, y, z } = position
      e.camera.position.set(x, y, z)
      controlRef.current.target.set(x * 1.001, y, z * 1.001)
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

  useFrame((state) => {
    // check if movement
    if (forward || backward) {
      move(state, controlRef.current, forward)
    }
    if (left || right) {
      rotate(state, controlRef.current, right, "start")
    } else {
      rotate(state, controlRef.current, right, "stop")
    }

    if (backward || forward || left || right) {
      // make the circles smaller
    } else {
      // make the circles bigger
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

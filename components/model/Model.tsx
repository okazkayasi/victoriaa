import { OrbitControls } from "@react-three/drei"
import { ThreeEvent, useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Circle } from "./Circle"
import { CENTERS, CIRCLE_OFFSET, CenterX, CenterY, CenterZ } from "./constants"

export const TheModel = () => {
  const controlRef = useRef(null)
  const gltf = useLoader(GLTFLoader, "/glb/demain_beauty.glb")

  const circlePositions: {
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

  useFrame((state, delta) => {
    // set orbit center equal to camera center
  })

  const onDoubleClick = (e: ThreeEvent<MouseEvent>) => {
    const { object } = e
    const { position } = object
    const { x, y, z } = position
    e.camera.position.set(x, y, z)
    controlRef.current.target.set(x * 1.001, y, z * 1.001)
  }

  return (
    <group>
      <OrbitControls
        target={[...CENTERS]}
        reverseOrbit={true}
        enablePan={false}
        enableZoom={false}
        ref={controlRef}
      />
      <primitive object={gltf.scene} />
      <ambientLight intensity={2} />
      {circlePositions.map((c) => {
        return (
          <Circle
            position={c.position}
            key={c.name}
            onDoubleClick={onDoubleClick}
          />
        )
      })}
    </group>
  )
}

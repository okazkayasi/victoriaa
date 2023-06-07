import { MeshProps, ThreeEvent, useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

type CircleProsp = {
  onDoubleClick: (e: ThreeEvent<MouseEvent>) => void
} & MeshProps

export const Circle = ({onDoubleClick, ...props}: MeshProps) => {
  const texture = useLoader(THREE.TextureLoader, "/models/POI.png")
  const ref = useRef(null)

  useFrame((state, delta) => {
    ref.current.lookAt(state.camera.position)
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onDoubleClick={onDoubleClick}
    >
      <circleGeometry args={[0.1]} />
      <meshPhongMaterial map={texture} flatShading />
    </mesh>
  )
}

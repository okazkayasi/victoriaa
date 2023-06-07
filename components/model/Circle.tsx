import { MeshProps, useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export const Circle = ({ onDoubleClick, ...props }: MeshProps) => {
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
      onPointerEnter={(e) => {
        e.object.scale.set(1.1, 1.1, 1.1)
      }}
      onPointerOut={(e) => {
        e.object.scale.set(1, 1, 1)
      }}
    >
      <circleGeometry args={[0.1]} />
      <meshPhongMaterial map={texture} flatShading />
    </mesh>
  )
}

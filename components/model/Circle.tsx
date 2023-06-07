import { MeshProps, useFrame, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import { showHideCircles } from "./showHideCircles"

export const Circle = ({ onDoubleClick, ...props }: MeshProps) => {
  const texture = useLoader(THREE.TextureLoader, "/models/POI.png")
  const ref = useRef(null)

  useFrame((state, delta) => {
    showHideCircles(state, ref.current)
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
      <circleGeometry args={[0.1, 32]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

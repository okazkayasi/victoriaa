import { MeshProps, useFrame, useLoader } from "@react-three/fiber"
import { useRef, useState } from "react"
import * as THREE from "three"
import { debounce } from "../../utils/debounce"
import { showHideCircles } from "./showHideCircles"
import { usePersonControls } from "./usePersonControls"

export const Circle = ({ onDoubleClick, ...props }: MeshProps) => {
  const [startScaleUp, setStartScaleUp] = useState(false)

  const texture = useLoader(THREE.TextureLoader, "/models/POI.png")
  const ref = useRef(null)
  const { left, right, forward, backward } = usePersonControls()
  const debouncedStartScaleUp = debounce(() => setStartScaleUp(true), 1000)
  useFrame((state, delta) => {
    showHideCircles(state, ref.current)
    ref.current.lookAt(state.camera.position)
    if (left || right || forward || backward) {
      const newVector = new THREE.Vector3(0.2, 0.2, 0.2)
      ref.current.scale.lerp(newVector, delta)
      setStartScaleUp(false)
      debouncedStartScaleUp()
    } else {
      const newVector = new THREE.Vector3(1, 1, 1)
      if (startScaleUp) {
        ref.current.scale.lerp(newVector, delta)
      }
    }
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onDoubleClick={onDoubleClick}
      onPointerEnter={(e) => {
        e.object.scale.set(1.1, 1.1, 1.1)
        document.body.style.cursor = "pointer"
      }}
      onPointerOut={(e) => {
        e.object.scale.set(1, 1, 1)
        document.body.style.cursor = "default"
      }}
    >
      <circleGeometry args={[0.1, 32]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

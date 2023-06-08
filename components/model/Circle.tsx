import { MeshProps, useFrame, useLoader } from "@react-three/fiber"
import { useMemo, useRef, useState } from "react"
import * as THREE from "three"
import { debounce } from "../../utils/debounce"
import { showHideCircles } from "./showHideCircles"
import { usePersonControls } from "./usePersonControls"

export const Circle = ({
  onDoubleClick,
  size,
  ...props
}: { size: number } & MeshProps) => {
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

  const geometry = useMemo(() => {
    return new THREE.CircleGeometry(size, 32)
  }, [])

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
      geometry={geometry}
    >
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

import { OrbitControls, Stats } from "@react-three/drei"
import { Canvas, useFrame, useLoader, type MeshProps } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

const Circle = (props: MeshProps) => {
  // load texture
  const texture = useLoader(THREE.TextureLoader, "/models/POI.png")

  return (
    <mesh {...props}>
      <circleGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

const Box = (props: MeshProps) => {
  const ref = useRef(null)
  const [hovered, setHover] = useState(false)
  const [rotate, setRotate] = useState(false)

  useFrame((_, delta) => {
    if (rotate && ref.current) {
      ref.current.rotation.x += 1 * delta
      ref.current.rotation.y += 0.5 * delta
    }
  })

  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onPointerDown={() => setRotate(!rotate)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry />
      <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe />
    </mesh>
  )
}

const ThreeFiber = () => {
  const [drei, setDrei] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setDrei(true)
    })
  })
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Box position={[-0.75, 0, 0]} name="a" />
      <Box position={[0.75, 0, 0]} name="b" />
      <Circle
        position={[0, -1, -1]}
        name="A"
        onPointerDown={(e) => {
          console.log(e)
        }}
      />

      <Stats />
      <OrbitControls />
    </Canvas>
  )
}

export default ThreeFiber

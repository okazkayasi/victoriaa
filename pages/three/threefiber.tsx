import { Canvas, useFrame, useLoader, type MeshProps } from "@react-three/fiber"
import { useRef, useState } from "react"
import * as THREE from "three"
import { type Mesh } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Circle = (props: MeshProps) => {
  // load texture
  const texture = useLoader(THREE.TextureLoader, "/models/POI.png")

  return (
    <mesh {...props}>
      <circleGeometry />
      <meshPhongMaterial map={texture} flatShading />
      <ambientLight />
    </mesh>
  )
}

const Box = (props: MeshProps) => {
  const ref = useRef<Mesh>(null)
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
  const gltf = useLoader(GLTFLoader, "/models/monkey.glb")

  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      {/* <primitive object={gltf.scene} /> */}
      <Box position={[-0.75, 10, 0]} name="a" />
      <Box position={[0.75, 10, 0]} name="b" />
      <Circle
        position={[0, 0, -1]}
        name="A"
        onPointerDown={(e) => {
          console.log(e)
        }}
      />
    </Canvas>
  )
}

export default ThreeFiber

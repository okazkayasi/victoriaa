import { OrbitControls, Stats, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const Monkey = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <ambientLight intensity={2} />
      <Monk />
      <Stats />
      <OrbitControls />
    </Canvas>
  )
}

export default Monkey

const Monk = () => {
  const gltf = useGLTF("/glb/monkey.glb")
  return <primitive object={gltf.scene} />
}

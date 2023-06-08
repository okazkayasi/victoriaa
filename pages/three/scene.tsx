import { useGLTF } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Monkey = () => {
  return (
    <Canvas>
      <ambientLight />
      <Monk />
    </Canvas>
  )
}

export default Monkey

const Monk = () => {
  const g = useGLTF("/models/monkey.glb")
  const gltf = useLoader(GLTFLoader, "/models/monkey.glb")
  return <primitive object={gltf.scene} />
}

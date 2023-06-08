import { useGLTF } from "@react-three/drei"

export default function Bird() {
  const gltf = useGLTF("/glb/monkey.glb")
  console.log(gltf, "gltf")
  return (
    <group>
      <primitive object={gltf.scene} />
    </group>
  )
}

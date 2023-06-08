import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Bird from "../components/Bird"

export default function BirdsPage() {
  return (
    <Canvas camera={{ position: [0, 0, 35] }}>
      <ambientLight intensity={2} />

      <OrbitControls />
      <Bird />
    </Canvas>
  )
}

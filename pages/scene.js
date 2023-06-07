import { Stats } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { TheModel } from "../components/model/Model"
import { CENTERS } from "../components/model/constants"

const Monkey = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{
          position: CENTERS,
          isPerspectiveCamera: true,
          near: 0.1,
          far: 1000,
          fov: 76,
        }}
      >
        <color attach="background" args={["#171720"]} />
        <TheModel />
        <Stats />
      </Canvas>
    </div>
  )
}

export default Monkey

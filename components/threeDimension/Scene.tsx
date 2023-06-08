import { Stats } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useState } from "react"
import { Vector3 } from "three"
import { TheModel } from "../model/Model"
import { CENTERS } from "../model/constants"

export const Scene = () => {
  const [lerping, setLerping] = useState(false)
  const [target, setTarget] = useState(new Vector3(10, 10, 10))

  const stopLerp = () => {
    console.log("stop lerp")
    setLerping(false)
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        onPointerDown={stopLerp}
        onKeyDown={stopLerp}
        camera={{
          position: new Vector3(...CENTERS),
          isPerspectiveCamera: true,
          near: 0.1,
          far: 1000,
          fov: 76,
        }}
      >
        <color attach="background" args={["#171720"]} />
        <TheModel
          lerping={lerping}
          setLerping={setLerping}
          target={target}
          setTarget={setTarget}
        />
        <Stats />
      </Canvas>
    </div>
  )
}

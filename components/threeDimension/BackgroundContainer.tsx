import { useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { type ReactNode } from "react"

export const BackgroundContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-1">
      <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 2] }}>
          <ambientLight />
          <Background />
        </Canvas>
      </div>
      <div className="z-10 h-full p-4.5">
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  )
}

const Background = () => {
  const gltf = useGLTF("/glb/monkey.glb")
  return <primitive object={gltf.scene} />
}

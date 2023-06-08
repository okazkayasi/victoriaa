import { Canvas, useLoader } from "@react-three/fiber"
import { useControls } from "leva"
import dynamic from "next/dynamic"
import { useMemo } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Polyhedron } from "~/components/threeComponents/Polyhedron"
const Stats = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Stats),
  {
    ssr: false,
  }
)
const OrbitControls = dynamic(
  () => import("@react-three/drei").then((mod) => mod.OrbitControls),
  { ssr: false }
)

const ThreeFiber = () => {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398),
  ]

  const color = useControls({
    value: "green",
  })

  const options = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      color: { value: "lime" },
    }
  }, [])

  const pA = useControls("pA", options)
  const pB = useControls("pB", options)

  const gltf = useLoader(
    GLTFLoader,
    "https://thinkuldeep.com/modelviewer/Astronaut.glb"
  )

  return (
    <Canvas camera={{ position: [0, 0, 2] }} className="h-screen">
      <color attach="background" args={[color.value]} />
      <Polyhedron
        position={[-1, 1, 0]}
        polyhedron={polyhedron}
        visible={pA.visible}
        color={pA.color}
        rotation={[pA.x, pA.y, pA.z]}
        material={new THREE.MeshBasicMaterial({ color: "lime" })}
      />
      <Polyhedron
        position={[1, 1, 0]}
        polyhedron={polyhedron}
        rotation={[pB.x, pB.y, pB.z]}
        visible={pB.visible}
        color={pB.color}
        material={new THREE.MeshStandardMaterial({ color: "white" })}
      />
      <directionalLight position={[1, 1, 1]} />
      <axesHelper />
      <gridHelper />
      <OrbitControls />
      <Stats />
    </Canvas>
  )
}

export default ThreeFiber

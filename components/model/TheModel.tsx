import { OrbitControls, useGLTF } from "@react-three/drei"
import { ThreeEvent, useFrame } from "@react-three/fiber"
import { MenuType, Products, initialMenu } from "pages/3d-store"
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { Vector3 } from "three"
import { Circle } from "./Circle"
import {
  CENTERS,
  CenterX,
  CenterY,
  CenterZ,
  Clickable,
  FAR_CIRCLE_OFFSET,
  HIDE_CIRCLES_DISTANCE,
  circlePositions,
  clickableNames,
  clickables,
} from "./constants"
import { move, rotate, usePersonControls } from "./usePersonControls"
import {
  openProductModal,
  scaleProductsUpAndDown,
  useRaycaster,
} from "./useRaycaster"

const USE_LOCAL = false // TODO: change
export const modelUrl = USE_LOCAL
  ? "/models/demain_beauty_v3.glb"
  : "https://victoria-vr.s3.us-east-2.amazonaws.com/demain_beauty_v3.glb"

export const TheModel = ({
  menu,
  lerping,
  setLerping,
  target,
  setTarget,
  setSelectedProduct,
  setMenu,
}: {
  menu: MenuType
  lerping: boolean
  setLerping: (lerping: boolean) => void
  target: Vector3
  setTarget: (target: Vector3) => void
  setMenu: Dispatch<SetStateAction<MenuType>>
  setSelectedProduct: Dispatch<SetStateAction<Products>>
}) => {
  const [lerpingToFar, setLerpingToFar] = useState(false)
  const [lerpingFromFar, setLerpingFromFar] = useState(false)
  const [lerpingPrevPos, setLerpingPrevPos] = useState(
    new Vector3(CenterX, CenterY, CenterZ)
  )

  const lerpBack = () => {
    setLerpingToFar(false)
    setTarget(lerpingPrevPos)
  }

  useEffect(() => {
    if (!menu.mobileMenuOn) {
      setLerpingFromFar(true)
    }
  }, [menu.mobileMenuOn])

  const isAnyMenuOn = Object.entries(menu)
    .filter((a) => a[0] !== "productOn" && a[0] !== "tutorialOn")
    .some((a) => a[1])

  const controlRef = useRef(null)

  const { forward, backward, left, right } = usePersonControls()

  const gltf = useGLTF(modelUrl)
  const { scene } = gltf

  const clickableObjects = scene.children.filter(
    ({ name }) => clickableNames.indexOf(name as Clickable["name"]) > -1
  )

  const circles = useMemo(() => {
    const onDoubleClick = (e: ThreeEvent<MouseEvent>) => {
      const { object } = e
      const { position } = object
      const { x, y, z } = position
      // check if too close to camera
      if (e.camera.position.distanceTo(position) < HIDE_CIRCLES_DISTANCE) {
        return
      }

      const vector = new Vector3(x, y, z)
      setTarget(vector)
      setLerping(true)
      if (object.name.startsWith("circleFar")) {
        setLerpingToFar(true)
        setLerpingPrevPos(e.camera.position.clone())
      }
    }

    const circles = circlePositions.map((c) => {
      return (
        <Circle
          position={c.position}
          key={c.name}
          name={c.name}
          size={c.size}
          onDoubleClick={onDoubleClick}
        />
      )
    })
    return circles
  }, [])

  const intersects = useRaycaster()
  const fun = () => {
    const productName = openProductModal(intersects)

    if (!menu?.productOn && productName) {
      const product = clickables.find((o) => o.name === productName)

      setMenu((prev) => ({ ...prev, productOn: true }))
      setSelectedProduct(product.localName)
    }
  }
  useEffect(() => {
    window.addEventListener("click", fun)
    return () => {
      window.removeEventListener("click", fun)
    }
  }, [fun])

  useFrame((state, delta) => {
    scaleProductsUpAndDown(intersects, clickableObjects)
    if (!lerpingToFar) {
      if (backward || forward || left || right) {
        setLerping(false)
        setTarget(state.camera.position)
      } else {
        // make the circles bigger
      }
      if (forward || backward) {
        move(state, controlRef.current, forward)
      }
      if (left || right) {
        rotate(state, controlRef.current, right, "start")
      } else {
        rotate(state, controlRef.current, right, "stop")
      }
    }
    if (lerping) {
      state.camera.position.lerp(target, delta * 2)
      const targetVec = new Vector3(
        target.x * 1.001,
        target.y,
        target.z * 1.001
      )
      controlRef.current.target.lerp(targetVec, delta * 2)

      if (state.camera.position.distanceTo(target) < 0.5) {
        setLerping(false)
        if (lerpingToFar) {
          setMenu({ ...initialMenu, mobileMenuOn: true })
          setLerpingToFar(false)
        }
      }
    }
    if (lerpingFromFar) {
      state.camera.position.lerp(lerpingPrevPos, delta * 2)
      controlRef.current.target.lerp(lerpingPrevPos, delta * 2)

      if (state.camera.position.distanceTo(lerpingPrevPos) < 0.1) {
        setLerpingFromFar(false)
      }
    }
  })

  return (
    <group>
      <OrbitControls
        target={[...CENTERS]}
        reverseOrbit={true}
        enablePan={false}
        enableZoom={false}
        enabled={!isAnyMenuOn}
        ref={controlRef}
      />
      <pointLight position={[CenterX, CenterY + 3, CenterZ]} intensity={1} />
      <pointLight
        position={[CenterX + FAR_CIRCLE_OFFSET, CenterY + 2, CenterZ]}
        intensity={0.1}
      />
      <pointLight
        position={[CenterX - FAR_CIRCLE_OFFSET, CenterY + 2, CenterZ]}
        intensity={0.1}
      />
      <pointLight
        position={[CenterX, CenterY + 2, CenterZ + FAR_CIRCLE_OFFSET]}
        intensity={0.1}
      />
      <pointLight
        position={[CenterX, CenterY + 2, CenterZ - FAR_CIRCLE_OFFSET]}
        intensity={0.1}
      />
      <primitive object={scene} />
      {circles}
    </group>
  )
}

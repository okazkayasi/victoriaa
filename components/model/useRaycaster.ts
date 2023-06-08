import { useFrame } from "@react-three/fiber"
import { useState } from "react"
import {
  Event,
  Intersection,
  Object3D,
  Raycaster,
  Vector2,
  Vector3,
} from "three"
import { Clickable, clickableNames } from "./constants"

export const useRaycaster = () => {
  const [intersects, setIntersects] = useState<Intersection[]>([])
  const raycaster = new Raycaster()
  useFrame((state) => {
    const pointer = new Vector2(state.mouse.x, state.mouse.y)
    raycaster.setFromCamera(pointer, state.camera)
    const intersects = raycaster.intersectObjects(state.scene.children)
    setIntersects(intersects)
  })
  return intersects
}

// make intersected objects scale up and down

export const scaleUpAndDown = (
  intersects: Intersection[],
  clickableObjects: Object3D<Event>[]
) => {
  let clickableName = ""
  console.log(intersects)
  for (let index = 0; index < intersects.length; index++) {
    const intersect = intersects[index]

    if (
      clickableNames.indexOf(intersect.object.name as Clickable["name"]) !== -1
    ) {
      // make cursor a pointer
      document.body.style.cursor = "pointer"
      console.log("clickable", intersect.object.name)
      clickableName = intersect.object.name
      const clickableObject = intersect.object
      const sclaeUpVec = new Vector3(1.2, 1.2, 1.2)
      clickableObject.scale.lerp(sclaeUpVec, 0.1)
      break
    } else {
      // make cursor default
      document.body.style.cursor = "default"
    }
  }
  clickableObjects.forEach((clickableObject) => {
    if (clickableObject.name !== clickableName) {
      const scaleDownVec = new Vector3(3, 1, 1)
      clickableObject.scale.lerp(scaleDownVec, 0.1)
    }
  })
}

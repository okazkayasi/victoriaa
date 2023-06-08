import { useFrame } from "@react-three/fiber"
import { useState } from "react"
import {
  Event,
  Intersection,
  Mesh,
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

export const scaleObjOrChildren = (obj: Object3D<Event>, vec: Vector3) => {
  if ((obj as Mesh).isMesh) {
    obj.scale.lerp(vec, 0.1)
  } else {
    obj.children.forEach((child) => {
      scaleObjOrChildren(child, vec)
    })
  }
}

// make intersected objects scale up and down

export const scaleUpAndDown = (
  intersects: Intersection[],
  clickableObjects: Object3D<Event>[]
) => {
  let clickableName = ""
  for (let index = 0; index < intersects.length; index++) {
    const intersect = intersects[index]

    const isObjectClickable =
      clickableNames.indexOf(intersect.object.name as Clickable["name"]) !== -1
    const isObjectParentClickable =
      clickableNames.indexOf(
        intersect.object.parent.name as Clickable["name"]
      ) !== -1

    if (isObjectClickable || isObjectParentClickable) {
      // make cursor a pointer
      document.body.style.cursor = "pointer"
      clickableName = isObjectClickable
        ? intersect.object.name
        : intersect.object.parent.name
      const clickableObject = isObjectClickable
        ? intersect.object
        : intersect.object.parent
      const sclaeUpVec = new Vector3(1.2, 1.2, 1.2)
      scaleObjOrChildren(clickableObject, sclaeUpVec)
      break
    } else {
      // make cursor default
      if (!intersects.find((i) => i.object.name.startsWith("circle"))) {
        document.body.style.cursor = "default"
      }
    }
  }
  clickableObjects.forEach((clickableObject) => {
    if (clickableObject.name !== clickableName) {
      const scaleDownVec = new Vector3(1, 1, 1)
      scaleObjOrChildren(clickableObject, scaleDownVec)
    }
  })
}

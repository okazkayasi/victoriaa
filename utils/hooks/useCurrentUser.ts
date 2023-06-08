import { getCookie } from "cookies-next"
import { useEffect, useState } from "react"

import { postGuestAccess, type UserData } from "../apiOperations/userOps"

export const useCurrentUser = () => {
  const [user, setUser] = useState<UserData | null>(null)

  useEffect(() => {
    const currentGuest = getCookie("currentGuest") as string
    if (currentGuest) {
      const userData = JSON.parse(currentGuest) as UserData
      setUser(userData)
    } else {
      // create guest user
      void postGuestAccess().then((data) => {
        if (data) {
          setUser(data)
          console.log("new user created")
        }
      })
    }
  }, [])
  return user
}

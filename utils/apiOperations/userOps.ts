import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { deleteCookie, setCookie } from "cookies-next"
import { ONE_DAY_IN_MILISECONDS, fetcher } from "./fetcher"

export type UserData = {
  userID: string
  userName?: string
  userType?: string
  token: string
}
export const postGuestAccess = async () => {
  const data = await axios.post<UserData>("/auth/guest").then((res) => res.data)

  if (data) {
    setCookie("currentGuest", JSON.stringify(data), {
      expires: new Date(Date.now() + ONE_DAY_IN_MILISECONDS),
    })
    return data
  }
  return null
}
export const useUser = () => {
  return useQuery<UserData>({
    queryKey: ["user"],
    queryFn: () => fetcher<UserData>("/my"),
  })
}
export const logout = () => {
  deleteCookie("currentGuest")
}

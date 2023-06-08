import axios from "axios"
import { getCookie } from "cookies-next"
import { type UserData } from "./userOps"

export const ONE_DAY_IN_MILISECONDS = 1000 * 60 * 60 * 24
const API_URL = "https://demain-api.ttk-test.xyz/api"

axios.defaults.baseURL = API_URL

export const getAuthToken = () => {
  const cookieVal = getCookie("currentGuest") as string
  const data = cookieVal ? (JSON.parse(cookieVal) as UserData) : null
  const token = data?.token
  return token
}

export const fetcher = <T>(url: string) => {
  const token = getAuthToken()
  return axios
    .get<T>(url, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
      // withCredentials: true,
    })
    .then((res) => res.data)
}

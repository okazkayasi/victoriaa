import { useLocalStorage } from "usehooks-ts"
import {
  SolarProfile,
  initialProfile,
} from "../components/profile/CurrentProfileContext"

export const useIsFirstTime = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars, @typescript-eslint/no-unsafe-call
  const [isFirstTime, setIsFirstTime] = useLocalStorage<boolean>(
    "firstTime",
    true
  )
  return { isFirstTime, setIsFirstTime }
}

export const useSolarProfile = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unused-vars, @typescript-eslint/no-unsafe-call
  const [solarProfile, setSolarProfile] = useLocalStorage<SolarProfile>(
    "solarProfile",
    initialProfile
  )
  return { solarProfile, setSolarProfile }
}

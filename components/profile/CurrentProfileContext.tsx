import { createContext, type Dispatch, type SetStateAction } from "react"
import { noop } from "../../utils/noop"


export type AgeOptions =
  | "Enfant"
  | "Adolescent"
  | "+ 20 ans"
  | "+ 40 ans"
  | "+ 50 ans"

export type ConcernOptions = "0" | "1" | "2" | "3" | "4"

export type BeautyConcernQuestions =
  | "antiImperfection"
  | "hydration"
  | "radiance"
  | "antiAge"

export type CommitmentQuestions = "clean" | "organic" | "microbiome" | "planet"

export type BeautyConcernFormType = Record<
  BeautyConcernQuestions,
  ConcernOptions | undefined
>
export type CommitmentFormType = Record<
  CommitmentQuestions,
  ConcernOptions | undefined
>

export type SolarProfile = {
  age?: AgeOptions
  beautyConcern: BeautyConcernFormType
  commitment: CommitmentFormType
  completed: boolean
}

export const initialProfile: SolarProfile = {
  age: undefined,
  beautyConcern: {
    antiImperfection: undefined,
    hydration: undefined,
    radiance: undefined,
    antiAge: undefined,
  },
  commitment: {
    clean: undefined,
    organic: undefined,
    microbiome: undefined,
    planet: undefined,
  },
  completed: false,
}

export const CurrentProfileContext = createContext<{
  currentProfile: SolarProfile
  setCurrentProfile: Dispatch<SetStateAction<SolarProfile>>
}>({
  currentProfile: initialProfile,
  setCurrentProfile: noop,
})

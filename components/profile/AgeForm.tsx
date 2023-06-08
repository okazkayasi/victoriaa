import { useEffect, type Dispatch, type SetStateAction } from "react"
import { useForm } from "react-hook-form"
import { ProfileSteps } from "../../pages/3d-store"
import { toastError } from "../../utils/toast"
import { useSolarProfile } from "../../utils/useIsFirstTime"
import { RadioGroupLarge } from "../input/RadioGroupLarge"
import { Title } from "../typography/Typography"
import { AgeOptions } from "./CurrentProfileContext"
import { NextStepButton } from "./Profile"


const ageFormOptions: AgeOptions[] = [
  "Enfant",
  "Adolescent",
  "+ 20 ans",
  "+ 40 ans",
  "+ 50 ans",
]

type AgeFormType = {
  age: AgeOptions
}

export const AgeForm = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<ProfileSteps>>
}) => {
  const { solarProfile, setSolarProfile } = useSolarProfile()

  const form = useForm<AgeFormType>({
    defaultValues: {
      age: solarProfile.age,
    },
  })
  const { watch, handleSubmit, register, formState } = form
  const value = watch("age")

  useEffect(() => {
    if (formState.isSubmitting) {
      if (formState.errors.age && formState.errors.age.type === "required") {
        toastError("Please select an age group")
      }
    }
  }, [formState])

  const submit = () => {
    setSolarProfile({
      ...solarProfile,
      age: form.getValues("age"),
    })
    setStep("beauty-form")
  }

  return (
    <div>
      <div className="pb-20">
        <div className="mb-11">
          <Title size="xsmall" bold color="white">
            HOW OLD ARE YOU ?
          </Title>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-8">
            <RadioGroupLarge
              options={ageFormOptions}
              register={register}
              name="age"
              selectedValue={value}
            />
          </div>
          <NextStepButton fill={25} />
        </form>
      </div>
    </div>
  )
}

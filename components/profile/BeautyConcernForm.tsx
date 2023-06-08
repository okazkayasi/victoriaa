import { useEffect, type Dispatch, type SetStateAction } from "react"
import { useForm } from "react-hook-form"
import { ProfileSteps } from "../../pages/3d-store"
import { toastError } from "../../utils/toast"
import { useSolarProfile } from "../../utils/useIsFirstTime"
import { RadioGroupSmall } from "../input/RadioGroupSmall"
import { Text, Title } from "../typography/Typography"
import { BeautyConcernFormType } from "./CurrentProfileContext"
import { NextStepButton, concernOptions } from "./Profile"


export const BeautyConcernForm = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<ProfileSteps>>
}) => {
  const { solarProfile, setSolarProfile } = useSolarProfile()

  const form = useForm<BeautyConcernFormType>({
    defaultValues: solarProfile.beautyConcern,
  })
  const { watch, handleSubmit, register, formState } = form

  const antiImperfectionValue = watch("antiImperfection")
  const hydrationValue = watch("hydration")
  const radianceValue = watch("radiance")
  const antiAgeValue = watch("antiAge")

  useEffect(() => {
    if (formState.isSubmitting) {
      if (
        formState.errors.antiAge?.type === "required" ||
        formState.errors.antiImperfection?.type === "required" ||
        formState.errors.hydration?.type === "required" ||
        formState.errors.radiance?.type === "required"
      ) {
        toastError("Please complete the form")
      }
    }
  }, [
    formState.errors.antiAge?.type,
    formState.errors.antiImperfection?.type,
    formState.errors.hydration?.type,
    formState.errors.radiance?.type,
    formState.isSubmitting,
  ])

  const submitForm = () => {
    setSolarProfile({
      ...solarProfile,
      beautyConcern: form.getValues(),
    })
    setStep("commitment-form")
  }

  return (
    <div>
      <div className="mb-5">
        <Title size="xsmall" bold color="white" className="mb-1">
          NOTEZ VOTRE INTÉRÊT VIS-À -VIS DE NOS ENGAGEMENTS
        </Title>
        <Text size="xsmall" color="white">
          0 = No concern
        </Text>
        <Text size="xsmall" color="white">
          4 = High concern
        </Text>
      </div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mb-6 flex flex-col items-center gap-3">
          <RadioGroupSmall
            options={concernOptions}
            register={register}
            text="Anti-imperfections"
            name="antiImperfection"
            selectedValue={antiImperfectionValue}
          />
          <RadioGroupSmall
            options={concernOptions}
            register={register}
            text="Hydratation"
            name="hydration"
            selectedValue={hydrationValue}
          />
          <RadioGroupSmall
            options={concernOptions}
            register={register}
            text="Éclat"
            name="radiance"
            selectedValue={radianceValue}
          />
          <RadioGroupSmall
            options={concernOptions}
            register={register}
            text="Anti-âge"
            name="antiAge"
            selectedValue={antiAgeValue}
          />
        </div>
        <NextStepButton fill={50} />
      </form>
    </div>
  )
}

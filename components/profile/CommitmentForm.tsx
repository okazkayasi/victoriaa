import { useEffect, type Dispatch, type SetStateAction } from "react"
import { useForm } from "react-hook-form"
import { type ProfileSteps } from "../../pages/3d-store"
import { toastError } from "../../utils/toast"
import { useSolarProfile } from "../../utils/useIsFirstTime"
import { RadioGroupSmall } from "../input/RadioGroupSmall"
import { type CommitmentFormType } from "../profile/CurrentProfileContext"
import { NextStepButton, concernOptions } from "../profile/Profile"
import { Text, Title } from "../typography/Typography"

export const CommitmentForm = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<ProfileSteps>>
}) => {
  const { solarProfile, setSolarProfile } = useSolarProfile()

  const form = useForm<CommitmentFormType>({
    defaultValues: solarProfile.commitment,
  })
  const { watch, handleSubmit, register, formState } = form

  const cleanValue = watch("clean")
  const organicValue = watch("organic")
  const microbiomeValue = watch("microbiome")
  const planetValue = watch("planet")

  useEffect(() => {
    if (formState.isSubmitting) {
      if (
        formState.errors.clean?.type === "required" ||
        formState.errors.organic?.type === "required" ||
        formState.errors.microbiome?.type === "required" ||
        formState.errors.planet?.type === "required"
      ) {
        toastError("Please complete the form")
      }
    }
  }, [
    formState.errors.clean?.type,
    formState.errors.microbiome?.type,
    formState.errors.organic?.type,
    formState.errors.planet?.type,
    formState.isSubmitting,
  ])

  const submitForm = () => {
    setSolarProfile({
      ...solarProfile,
      commitment: form.getValues(),
    })
    setStep("result")
  }

  return (
    <div>
      <div className="mb-5">
        <Title size="xsmall" bold color="white" className="mb-1">
          NOTE YOUR INTEREST IN OUR COMMITMENTS
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
            register={register}
            selectedValue={cleanValue}
            options={concernOptions}
            text="Clean"
            name="clean"
          />
          <RadioGroupSmall
            register={register}
            selectedValue={organicValue}
            options={concernOptions}
            text="Biologique"
            name="organic"
          />
          <RadioGroupSmall
            register={register}
            selectedValue={microbiomeValue}
            options={concernOptions}
            text="Respect du microbiome"
            name="microbiome"
          />
          <RadioGroupSmall
            register={register}
            selectedValue={planetValue}
            options={concernOptions}
            text="Respect de la planète"
            name="planet"
          />
        </div>
        <NextStepButton fill={75} />
      </form>
    </div>
  )
}

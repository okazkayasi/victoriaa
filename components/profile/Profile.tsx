import { EmptyProfile } from "components/shapes/EmptyProfile"
import { type Dispatch, type SetStateAction } from "react"
import { Button } from "../../components/button/Button"
import { LoadingBar } from "../../components/loadingBar/LoadingBar"
import { AgeForm } from "../../components/profile/AgeForm"
import { BeautyConcernForm } from "../../components/profile/BeautyConcernForm"
import { CommitmentForm } from "../../components/profile/CommitmentForm"
import { Products } from "../../components/profile/Products"
import { Result } from "../../components/profile/Result"
import { type ProfileSteps } from "../../pages/3d-store"
import { CloseButton } from "../button/CloseButton"
import { Text, Title } from "../typography/Typography"

const ProfileStart = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<ProfileSteps>>
}) => (
  <div>
    <div className="mb-11">
      <Title as="h2" size="xsmall" bold color="white" className="mb-3.5">
        SET UP YOUR SOLAR PROFILE
      </Title>
      <Text size="small" color="white">
        To receive our most personalized recommendations!
      </Text>
    </div>
    <div className="mb-10 flex flex-col items-center">
      <EmptyProfile />
    </div>
    <div>
      <Button className="w-full" onClick={() => setStep("age-form")}>
        START
      </Button>
    </div>
  </div>
)

export const NextStepButton = ({
  text,
  onClick,
  fill,
}: {
  text?: string
  onClick?: () => void
  fill: number
}) => {
  const displayText = text || "Next Step"
  return (
    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center">
      <Button
        onClick={onClick}
        type="submit"
        variant="text"
        className="px-0 pb-2 pt-0 text-[14px]"
      >
        {displayText}
      </Button>
      <LoadingBar fill={fill} className="mx-auto" />
    </div>
  )
}

export const concernOptions = ["0", "1", "2", "3", "4"] as const

export const Profile = ({
  closeProfile,
  step,
  setStep,
}: {
  closeProfile: () => void
  step: ProfileSteps
  setStep: Dispatch<SetStateAction<ProfileSteps>>
}) => {
  return (
    <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
      <CloseButton onClick={closeProfile} color="white" />
      <div className="relative h-[575px] w-[450px] bg-main bg-opacity-80 px-14 pt-15">
        {step === "start" && <ProfileStart setStep={setStep} />}
        {step === "age-form" && <AgeForm setStep={setStep} />}
        {step === "beauty-form" && <BeautyConcernForm setStep={setStep} />}
        {step === "commitment-form" && <CommitmentForm setStep={setStep} />}
        {step === "result" && <Result setStep={setStep} />}
        {step === "products" && (
          <Products closeProfile={closeProfile} setStep={setStep} />
        )}
      </div>
    </div>
  )
}

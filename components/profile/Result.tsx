import { useEffect, type Dispatch, type SetStateAction } from "react"
import { Button } from "../../components/button/Button"
import { initialProfile } from "../../components/profile/CurrentProfileContext"
import { NextStepButton } from "../../components/profile/Profile"
import { ProfileGraph } from "../../components/shapes/ProfileGraph"
import { Text, Title } from "../../components/typography/Typography"
import { type ProfileSteps } from "../../pages/3d-store"
import { useSolarProfile } from "../../utils/useIsFirstTime"

export const Result = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<ProfileSteps>>
}) => {
  const { setSolarProfile, solarProfile } = useSolarProfile()
  console.log(solarProfile)

  useEffect(() => {
    return () => {
      setSolarProfile((solarProfile) => ({ ...solarProfile, completed: true }))
    }
  }, [setSolarProfile])

  const onRedo = () => {
    setSolarProfile(initialProfile)
    setStep("start")
  }

  return (
    <div>
      <div className="mb-8">
        <Title as="h2" size="xsmall" bold color="white" className="mb-3.5">
          SET UP YOUR SOLAR PROFILE
        </Title>
        <Text size="small" color="white">
          To receive our most personalized recommendations!
        </Text>
      </div>
      <div className="relative z-10 mb-4 flex justify-center">
        <div className="z-10 h-[280px] w-[306px]">
          <ProfileGraph solarProfile={solarProfile} />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2">
          <div className="-translate-x-[1px]">
            {/*<div className="h-24 w-24 -translate-y-1/2 rounded-full bg-graph"></div>*/}
            {/*planet*/}
            {/*<div className="-ml-0.5 h-32 w-[17px] bg-graph bg-opacity-100"></div>*/}
          </div>
        </div>
      </div>
      <div>
        <Button className="w-full" onClick={onRedo}>
          REDO
        </Button>
      </div>
      <NextStepButton
        fill={100}
        text={"See Product"}
        onClick={() => setStep("products")}
      />
    </div>
  )
}

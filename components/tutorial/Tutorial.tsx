import clsx from "clsx"
import {
  useEffect,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react"
import { SettingsIcon } from "../../components/shapes/SettingsIcon"
import { useIsFirstTime } from "../../utils/useIsFirstTime"
import { BackIcon } from "../shapes/BackIcon"
import { CartIcon } from "../shapes/CartIcon"
import { KeyboardArrowIcon } from "../shapes/KeyboardArrowIcon"
import { MouseDragIcon } from "../shapes/MouseDragIcon"
import { SunIcon } from "../shapes/SunIcon"
import { Text, Title } from "../typography/Typography"

export const TutorialStepText = ({ children }: { children: ReactNode }) => {
  return (
    <Text size="small" color="black" key={1}>
      {children}
    </Text>
  )
}

export const Tutorial = ({
  closeTutorial,
  step,
  setStep,
}: {
  closeTutorial: () => void
  step: number
  setStep: Dispatch<SetStateAction<number>>
}) => {
  const { setIsFirstTime } = useIsFirstTime()
  const prevStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1)
    }
  }
  const nextStep = () => {
    if (step < TUTORIAL_MAX_STEP) {
      setStep((prev) => prev + 1)
    } else {
      setStep(0)
      closeTutorial()
    }
  }

  useEffect(() => {
    return () => {
      setIsFirstTime(false)
    }
  }, [setIsFirstTime])

  const stepComponents = [
    <TutorialStepText key={0}>
      Here&apos;s a quick tutorial to help you navigate better in our metaverse.
    </TutorialStepText>,
    <TutorialStepText key={1}>
      Use the left and right arrow keys on the keyboard to turn in those
      directions. Use the up and down arrow keys on the keyboard to move forward
      and backward.
    </TutorialStepText>,
    <TutorialStepText key={2}>
      You can also use the mouse for smoother navigation. Click and drag with
      the mouse to turn in different directions.
    </TutorialStepText>,
    <TutorialStepText key={3}>
      At any time, you can access this tutorial by clicking on the &quot;?&quot;
      button.
    </TutorialStepText>,
    <TutorialStepText key={4}>
      You can access your cart by clicking on the{" "}
      <CartIcon className="inline h-6 w-6" /> button.
    </TutorialStepText>,
    <TutorialStepText key={5}>
      You can also set up your solar profile to receive our most personalized
      recommendations by clicking on the <SunIcon className="inline h-6 w-6" />{" "}
      button.
    </TutorialStepText>,
    <TutorialStepText key={6}>
      You can choose your language by clicking on the{" "}
      <SettingsIcon className="inline h-6 w-6" /> button.
    </TutorialStepText>,
  ]

  const TUTORIAL_MAX_STEP = stepComponents.length - 1

  const step1Visual = (
    <div className="relative flex h-[250px] w-[250px] items-center justify-center bg-white bg-opacity-80">
      <KeyboardArrowIcon className="absolute" />
      <KeyboardArrowIcon className="rotate-90" />
    </div>
  )

  const step2Visual = (
    <div className="flex h-[250px] w-[250px] items-center justify-center bg-white bg-opacity-80">
      <MouseDragIcon />
    </div>
  )

  return (
    <div>
      <div className="absolute left-1/2 top-[120px] z-20 -translate-x-1/2">
        {step === 1 && step1Visual}
        {step === 2 && step2Visual}
      </div>
      <div className="absolute bottom-16 left-1/2 z-20 w-10/12 max-w-[880px] -translate-x-1/2">
        <div className="bg-white bg-opacity-80 px-8">
          <div className="relative pb-10 pt-8">
            <Title size="medium" color="main" bold className="mb-3">
              TUTORIAL
            </Title>
            {stepComponents[step]}
            <div className="absolute bottom-4 flex w-full justify-between">
              <button
                onClick={prevStep}
                disabled={step === 0}
                className={clsx(step === 0 && "opacity-50")}
              >
                <BackIcon />
              </button>
              <button onClick={nextStep}>
                <BackIcon className="rotate-180" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-1">
          <Text
            className="select-none text-center text-base underline"
            color="white"
          >
            <button onClick={closeTutorial} className="underline">
              Skip the introduction
            </button>
          </Text>
        </div>
      </div>
    </div>
  )
}

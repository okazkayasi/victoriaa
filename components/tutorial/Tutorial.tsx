import clsx from "clsx"
import { QuestionMarkIcon } from "components/shapes/QuestionMarkIcon"
import { SettingsIcon } from "components/shapes/SettingsIcon"
import {
  useEffect,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react"
import { Trans, useTranslation } from "react-i18next"
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
  const { t } = useTranslation()
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
    <TutorialStepText key={1}>
      <Trans t={t} i18nKey={"common.tutorial.metaverse.step_1"} />
    </TutorialStepText>,
    <TutorialStepText key={2}>
      <Trans t={t} i18nKey={"common.tutorial.metaverse.step_2"} />
    </TutorialStepText>,
    <TutorialStepText key={3}>
      <Trans t={t} i18nKey={"common.tutorial.metaverse.step_3"} />
    </TutorialStepText>,

    <TutorialStepText key={4}>
      <Trans
        t={t}
        i18nKey={"common.tutorial.metaverse.step_4"}
        components={[<QuestionMarkIcon className="inline h-4 w-4" />]}
      />
    </TutorialStepText>,
    <TutorialStepText key={5}>
      <Trans
        t={t}
        i18nKey={"common.tutorial.metaverse.step_5"}
        components={[<CartIcon className="inline h-6 w-6" />]}
      />
    </TutorialStepText>,
    <TutorialStepText key={6}>
      <Trans
        t={t}
        i18nKey={"common.tutorial.metaverse.step_6"}
        components={[<SunIcon className="inline h-6 w-6" />]}
      />
    </TutorialStepText>,
    <TutorialStepText key={7}>
      <Trans
        t={t}
        i18nKey={"common.tutorial.metaverse.step_7"}
        components={[<SettingsIcon className="inline h-6 w-6" />]}
      />
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
              {t("common.tutorial.metaverse.title")}
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
              {t("common.tutorial.metaverse.skip_intro_button_text")}
            </button>
          </Text>
        </div>
      </div>
    </div>
  )
}

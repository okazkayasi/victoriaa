import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import { BackIcon } from "../shapes/BackIcon"
import { Text } from "../typography/Typography"

export const CeoTutorial = ({
  handleNext,
  step,
  setStep,
}: {
  handleNext: () => void
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
}) => {
  const { t } = useTranslation()
  const router = useRouter()

  const stepUp = () => {
    if (step < 2) {
      setStep((step) => step + 1)
    } else {
      handleNext()
    }
  }

  const stepDown = () => {
    if (step > 0) {
      setStep((step) => step - 1)
    }
  }

  const stepComponents = [
    <Text size="medium" color="black" key={0}>
      {t("common.tutorial.intro.tutorial_step_1")}
    </Text>,
    <Text size="medium" color="black" key={1}>
      {t("common.tutorial.intro.tutorial_step_2")}
    </Text>,
    <Text size="medium" color="black" key={2}>
      {t("common.tutorial.intro.tutorial_step_3")}
    </Text>,
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
      }}
      className="h-screen w-screen"
    >
      <div className="absolute bottom-12 left-1/2 w-[80%] max-w-[1000px] -translate-x-1/2">
        <div className="relative w-full bg-white bg-opacity-80 pb-2 pl-10 pr-4 pt-13">
          {stepComponents[step]}
          <div className="flex justify-between pt-2">
            <div>
              {step !== 0 && (
                <button onClick={stepDown}>
                  <BackIcon />
                </button>
              )}
            </div>
            <div>
              <button onClick={stepUp} className="rotate-180">
                <BackIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <Text
            className="select-none text-center text-base underline"
            color="white"
          >
            <button
              onClick={() => {
                void router.push("/3d-store")
              }}
              className="underline"
            >
              {t("common.tutorial.intro.skip_intro_button_text")}
            </button>
          </Text>
        </div>
        <div className="absolute left-0 top-0 -translate-x-[10px] -translate-y-2/3">
          <Image src="/images/ceo.png" alt="CEO" width={111} height={111} />
        </div>
      </div>
    </motion.div>
  )
}

import { AnimatePresence, motion } from "framer-motion"
import { type GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "../components/button/Button"
import { MainContainer } from "../components/container/MainContainer"
import { BackIcon } from "../components/shapes/BackIcon"
import { Text, Title } from "../components/typography/Typography"
import { getIntlProps } from "../utils/getIntlProps"
import { useIsFirstTime } from "../utils/useIsFirstTime"

const IntroComponent = ({ handleStart }: { handleStart: () => void }) => {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <MainContainer className="h-screen w-screen opacity-90">
        <section className="mx-auto flex h-full w-full flex-col items-center justify-around p-4">
          <div>
            <Title
              as="h1"
              size="large"
              bold
              color="white"
              className="text-center"
            >
              {t("common.tutorial.intro.caption")}
            </Title>
          </div>
          <div>
            <Image src="/images/logo.png" width={318} height={130} alt="logo" />
          </div>
          <div className="mt-2">
            <Text size="medium" color="white">
              {t("common.tutorial.intro.subheader")}
            </Text>
          </div>
          <div className="bg-opacity-100 opacity-100">
            <Button
              onClick={handleStart}
              className="min-w-[282px] bg-opacity-100 text-xl opacity-100"
            >
              {t("common.tutorial.intro.enter_button_text")}
            </Button>
          </div>
        </section>
      </MainContainer>
    </motion.div>
  )
}

const CeoTutorial = ({
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

const SkipProductTutorial = () => {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute bottom-16 left-1/2 w-screen -translate-x-1/2">
        <div>
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
      </div>
    </div>
  )
}

const ProductTutorial = () => {
  const router = useRouter()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <video
        controls={true}
        autoPlay={true}
        muted={true}
        className="fixed inset-0 -z-10 h-screen w-screen object-cover"
        onEnded={() => {
          void router.push("/3d-store")
        }}
      >
        <source
          src="https://victoria-vr.s3.us-east-2.amazonaws.com/Chafik_vid2__V3.mov"
          type="video/mp4"
        />
        <img src="/images/logo.png" alt="fallback img" />
      </video>
    </motion.div>
  )
}

const IntroVideo = () => {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <video
        controls={true}
        autoPlay={true}
        muted={true}
        loop={true}
        className="fixed inset-0 -z-10 h-screen w-screen object-cover"
      >
        <source
          src="https://victoria-vr.s3.us-east-2.amazonaws.com/Chafik_vid1_V1.mov"
          type="video/mp4"
        />
        <img src="/images/logo.png" alt="fallback img" />
      </video>
    </motion.div>
  )
}

type StepType = "intro" | "ceo-tutorial" | "product-tutorial"
const VideoTutorial = () => {
  const router = useRouter()
  const { isFirstTime } = useIsFirstTime()

  const [step, setStep] = useState<StepType>("intro")
  const [tutorialStep, setTutorialStep] = useState<number>(0)

  const handleStart = () => {
    if (isFirstTime) {
      setStep("ceo-tutorial")
    } else {
      void router.push("/3d-store")
    }
  }
  const handleNext = () => {
    setStep("product-tutorial")
  }

  const ceoDisplaysFirstVideo = step === "ceo-tutorial"

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {(step === "intro" || ceoDisplaysFirstVideo) && (
          <IntroVideo key="intro" />
        )}
        {step === "intro" && (
          <IntroComponent handleStart={handleStart} key="intro-comp" />
        )}
        {step === "ceo-tutorial" && (
          <CeoTutorial
            handleNext={handleNext}
            step={tutorialStep}
            setStep={setTutorialStep}
            key="ceo"
          />
        )}
        {step === "product-tutorial" && (
          <>
            <ProductTutorial key="prod-tutorial" />
            <SkipProductTutorial />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default VideoTutorial

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await getIntlProps(ctx)),
    },
  }
}

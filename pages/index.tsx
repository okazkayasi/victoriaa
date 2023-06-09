import { CeoTutorial } from "components/intro/CeoTutorial"
import { IntroComponent } from "components/intro/IntroComponent"
import { IntroVideo } from "components/intro/IntroVideo"
import {
  ProductTutorial,
  SkipProductTutorial,
} from "components/intro/ProductTutorial"
import { Layout } from "components/layout/Layout"
import { AnimatePresence } from "framer-motion"
import { type GetStaticProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import { getIntlProps } from "../utils/getIntlProps"
import { useIsFirstTime } from "../utils/useIsFirstTime"

type StepType = "intro" | "ceo-tutorial" | "product-tutorial"
const Index = () => {
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
    <>
      <Head>
        <link
          rel="preload"
          href="https://victoria-vr.s3.us-east-2.amazonaws.com/Chafik_vid1_v1.mp4"
          as="video"
        />
        <link
          rel="preload"
          href="https://victoria-vr.s3.us-east-2.amazonaws.com/Chafik_vid2__V3_v1.mp4"
          as="video"
        />
      </Head>
      <Layout>
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
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await getIntlProps(ctx)),
    },
  }
}

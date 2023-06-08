import { Button } from "components/button/Button"
import { MainContainer } from "components/container/MainContainer"
import { Text, Title } from "components/typography/Typography"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export const IntroComponent = ({
  handleStart,
}: {
  handleStart: () => void
}) => {
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
            <Image
              src="/images/logo.png"
              priority
              width={318}
              height={130}
              alt="logo"
            />
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

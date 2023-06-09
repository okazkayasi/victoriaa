import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import { Text } from "../typography/Typography"

export const ProductTutorial = () => {
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
        autoPlay={true}
        muted={true}
        className="fixed inset-0 -z-10 h-screen w-screen object-cover"
        preload="auto"
        onEnded={() => {
          void router.push("/3d-store")
        }}
      >
        <source
          src="https://victoria-vr.s3.us-east-2.amazonaws.com/Chafik_vid2__V3_v1.mp4"
          type="video/mp4"
        />
        <img src="/images/logo.png" alt="fallback img" />
      </video>
    </motion.div>
  )
}

export const SkipProductTutorial = () => {
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

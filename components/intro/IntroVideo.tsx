import { motion } from "framer-motion"

export const IntroVideo = () => {
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
        autoPlay={true}
        muted={true}
        loop={true}
        preload="auto"
        className="fixed inset-0 -z-10 h-screen w-screen object-cover"
      >
        <source
          src="https://victoria-vr.s3.us-east-2.amazonaws.com/Chafik_vid1_v1.mp4"
          type="video/mp4"
        />
        <img src="/images/logo.png" alt="fallback img" />
      </video>
    </motion.div>
  )
}

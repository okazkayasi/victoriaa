import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { montserrat } from "components/typography/Typography"
import { AnimatePresence } from "framer-motion"
import { appWithTranslation } from "next-i18next"
import { type AppType } from "next/app"
import Head from "next/head"
import "react-toastify/dist/ReactToastify.css"
import "../styles/globals.css"

const queryClient = new QueryClient()

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="model"
          href="https://victoria-vr.s3.us-east-2.amazonaws.com/demain_beauty_v3.glb"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="description"
          content="ALSA je komunitní portál pro lidi s onemocněním Amyotrofické laterální sklerózy."
        />
        <meta name="title" content="ALSA" />
      </Head>
      <style global jsx>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }

        html {
          font-size: 100%;
          min-height: 100vh;
        }

        body {
          min-height: 100vh;
          margin: 0;
          padding: 0;

          display: flex;
          flex-direction: column;
        }

        #__next {
          flex: 1;
          display: flex;
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </QueryClientProvider>
    </>
  )
}

export default appWithTranslation(MyApp)

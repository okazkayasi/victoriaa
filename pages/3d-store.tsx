import { Layout } from "components/layout/Layout"
import { type GetStaticProps } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"
import { Cart } from "../components/cart/Cart"
import { ProductButtons } from "../components/products/ProductButtons"
import { ProductModal } from "../components/products/ProductModal"
import { Profile } from "../components/profile/Profile"
import { Settings } from "../components/settings/Settings"
import { BackgroundContainer } from "../components/threeDimension/BackgroundContainer"
import { ThreeDHeader } from "../components/threeDimension/ThreeDHeader"
import { Tutorial } from "../components/tutorial/Tutorial"
import { fetcher } from "../utils/apiOperations/fetcher"
import { type ProductsResponse } from "../utils/apiOperations/productOps"
import { getIconsToDisplay } from "../utils/getIconsToDisplay"
import { getIntlProps } from "../utils/getIntlProps"
import { ingredientsList, productsList } from "../utils/ingredientsList"
import { useIsFirstTime } from "../utils/useIsFirstTime"

export type MenuType = {
  tutorialOn: boolean
  settingsOn: boolean
  cartOn: boolean
  profileOn: boolean
  productOn: boolean
}

export type ProfileSteps =
  | "start"
  | "age-form"
  | "beauty-form"
  | "commitment-form"
  | "result"
  | "products"

export type Products =
  | "go_for_detox"
  | "go_for_glow"
  | "go_for_protection_skincare"
  | "go_for_protection_dietary"
  | "time_to_repair"
  | "happy_age"
  | "sculpt_glow"
  | "time_to_detox"
  | "zero_waste"
  | "gua_sha"
  | "cleansing_wipe"

const initialMenu: MenuType = {
  tutorialOn: false,
  settingsOn: false,
  cartOn: false,
  profileOn: false,
  productOn: false,
}

const ThreeDStore = () => {
  const [menu, setMenu] = useState<MenuType>(initialMenu)

  const escapeEvent = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setMenu(initialMenu)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", escapeEvent)
    return () => {
      window.removeEventListener("keydown", escapeEvent)
    }
  }, [])

  const [tutorialStep, setTutorialStep] = useState<number>(0)
  const [profileFormStep, setProfileFormStep] = useState<ProfileSteps>("start")
  const iconsToDisplay = getIconsToDisplay(tutorialStep, menu.tutorialOn)
  const [selectedProduct, setSelectedProduct] = useState<Products>(
    null as unknown as Products
  )

  const closeMenu = (menu: keyof MenuType) => {
    return () => setMenu((prev) => ({ ...prev, [menu]: false }))
  }

  const { isFirstTime } = useIsFirstTime()

  useEffect(() => {
    if (isFirstTime) {
      setMenu((prev) => ({ ...prev, tutorialOn: true }))
    }
  }, [isFirstTime, setMenu])

  return (
    <>
      <Head>
        {ingredientsList.map((ing) => (
          <link
            key={ing}
            rel="preload"
            href={"/ingredientImages/" + ing + ".png"}
            as="image"
          />
        ))}
        {productsList.map((prod) => (
          <link
            key={prod}
            rel="preload"
            href={"/productsImages/" + prod + ".png"}
            as="image"
          />
        ))}
      </Head>
      <Layout>
        <BackgroundContainer
          menu={menu}
          setMenu={setMenu}
          setSelectedProduct={setSelectedProduct}
        >
          <ToastContainer position="top-right" />
          <ThreeDHeader setMenu={setMenu} displayIcons={iconsToDisplay} />

          {menu.settingsOn && (
            <Settings closeSettings={closeMenu("settingsOn")} />
          )}

          {menu.tutorialOn && (
            <Tutorial
              closeTutorial={closeMenu("tutorialOn")}
              step={tutorialStep}
              setStep={setTutorialStep}
            />
          )}

          {menu.cartOn && <Cart closeCart={closeMenu("cartOn")} />}

          {menu.profileOn && (
            <Profile
              closeProfile={closeMenu("profileOn")}
              step={profileFormStep}
              setStep={setProfileFormStep}
            />
          )}

          <ProductButtons
            setSelectedProduct={setSelectedProduct}
            setMenu={setMenu}
          />
          {menu.productOn && (
            <ProductModal
              productName={selectedProduct}
              closeModal={closeMenu("productOn")}
            />
          )}
        </BackgroundContainer>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const products = await fetcher<ProductsResponse>("/products?limit=100")
  const imageData = products.data.products.edges
    .map((p) => ({
      images: p.node.images.edges.map((e) => ({
        ...e.node,
        title: p.node.title,
      })),
    }))
    .map((p) => p.images)
    .flat()

  return {
    props: {
      imageData,
      ...(await getIntlProps(ctx)),
    },
  }
}

export default ThreeDStore

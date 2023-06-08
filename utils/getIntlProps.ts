import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import nextI18nextConfig from "../next-i18next.config"

export async function getIntlProps(context?: { locale?: string | undefined }) {
  const lng = context?.locale || "fr"
  const namespaces = ["common"]
  return serverSideTranslations(lng, namespaces, nextI18nextConfig)
}

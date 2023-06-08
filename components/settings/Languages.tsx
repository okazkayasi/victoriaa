import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import { BackIcon } from "../shapes/BackIcon"
import { CheckIcon } from "../shapes/CheckIcon"
import { Text, Title } from "../typography/Typography"

type Languages = "fr" | "en"

export const LanguageItem = (props: { text: string; value: Languages }) => {
  const { i18n } = useTranslation()
  const router = useRouter()
  const changeLanguage = async () => {
    await i18n.changeLanguage(props.value)
    await router.push(router.asPath, router.asPath, { locale: props.value })
  }
  const selected = i18n.language === props.value
  return (
    <li className="mb-4 border-b border-black pb-2">
      <button onClick={changeLanguage} className="w-full">
        <div className="flex items-center justify-between">
          <Text size="small">{props.text}</Text>
          {selected && <CheckIcon />}
        </div>
      </button>
    </li>
  )
}

export const LanguageSettings = ({
  backToMainMenu,
}: {
  backToMainMenu: () => void
}) => {
  const { t } = useTranslation()
  return (
    <div>
      <div className="absolute top-6">
        <button onClick={backToMainMenu}>
          <BackIcon />
        </button>
      </div>
      <Title size="medium" color="main" bold className="mb-5">
        LANGUAGES
      </Title>
      <div>
        <ul className="border-b">
          <LanguageItem
            text={t("common.settings.languages.english")}
            value="en"
          />
          <LanguageItem
            text={t("common.settings.languages.french")}
            value="fr"
          />
        </ul>
      </div>
    </div>
  )
}

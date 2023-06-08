import {
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react"
import { CloseButton } from "../button/CloseButton"
import { Text, Title } from "../typography/Typography"

import { useTranslation } from "react-i18next"
import { RightArrow } from "../shapes/RightArrow"
import { LanguageSettings } from "./Languages"

const SettingsWrapper = ({
  children,
  closeSettings,
}: {
  children: ReactNode
  closeSettings: () => void
}) => {
  return (
    <div className="absolute bottom-0 left-0 z-20">
      <CloseButton onClick={closeSettings} />
      <div className="h-[290px] w-[300px] bg-white bg-opacity-80 px-7.5 pt-14">
        {children}
      </div>
    </div>
  )
}

export const SettingItem = (props: { text: string; onClick: () => void }) => {
  return (
    <li className="mb-4 border-b border-black pb-2">
      <button onClick={props.onClick} className="block w-full">
        <div className="flex items-center justify-between">
          <Text size="small">{props.text}</Text>
          <RightArrow />
        </div>
      </button>
    </li>
  )
}

const MainSettings = ({
  setSettingRoute,
}: {
  setSettingRoute: Dispatch<SetStateAction<SettingsType>>
}) => {
  const { t } = useTranslation()
  const changeRoute = (route: SettingsType) => {
    return () => setSettingRoute(route)
  }

  return (
    <div>
      <Title size="medium" color="main" bold className="mb-5">
        {t("common.settings.main.title")}
      </Title>
      <div>
        <ul>
          <SettingItem
            text={t("common.settings.main.lang_option")}
            onClick={changeRoute("languages")}
          />
          {/* <SettingItem
            text={t("common.settings.main.audio")}
            onClick={changeRoute("audio")}
          />
          <SettingItem
            text={t("common.settings.main.preferences_option")}
            onClick={changeRoute("preferences")}
          /> */}
        </ul>
      </div>
    </div>
  )
}

type SettingsType = "main" | "languages" | "audio" | "preferences"
export const Settings = ({ closeSettings }: { closeSettings: () => void }) => {
  const [settingRoute, setSettingRoute] = useState<SettingsType>("main")

  const backToMainMenu = () => {
    setSettingRoute("main")
  }

  return (
    <SettingsWrapper closeSettings={closeSettings}>
      {settingRoute === "main" && (
        <MainSettings setSettingRoute={setSettingRoute} />
      )}
      {settingRoute === "languages" && (
        <LanguageSettings backToMainMenu={backToMainMenu} />
      )}
    </SettingsWrapper>
  )
}

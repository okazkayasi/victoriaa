import { type ReactNode } from "react"

type MobileLayoutProps = {
  children?: ReactNode
  footerElement?: ReactNode
}
export const MobileLayout = (props: MobileLayoutProps) => {
  return (
    <section className="mx-auto flex h-full w-fit flex-col justify-center px-4 xs:px-11">
      <div className="flex h-[450px] max-h-[90%] min-h-[50%] flex-col gap-4 xs:gap-12 sm:gap-32">
        {props.children}
      </div>
      {props.footerElement && (
        <div className="absolute bottom-4 left-1/2 max-w-fit -translate-x-1/2 xs:bottom-12">
          {props.footerElement}
        </div>
      )}
    </section>
  )
}

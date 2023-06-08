import { useRef, type ReactNode } from "react"

export const BackgroundContainer = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const effectCalled = useRef<boolean>(false)

  return (
    <div className="flex-1">
      <div className="fixed inset-0 -z-10">
        <div ref={ref} />
        <button
        >
          asfasfas
        </button>
      </div>
      <div className="z-10 h-full p-4.5">
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  )
}

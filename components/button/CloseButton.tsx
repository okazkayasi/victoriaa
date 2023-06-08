import { CloseIcon } from "../shapes/CloseIcon"

export const CloseButton = ({
  onClick,
  color,
}: {
  onClick: () => void
  color?: "white"
}) => (
  <div className="absolute right-6 top-4 z-10 opacity-100">
    <button onClick={onClick}>
      <CloseIcon color={color} />
    </button>
  </div>
)

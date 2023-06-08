export type IconNames =
  | "tutorialIcon"
  | "settingsIcon"
  | "cartIcon"
  | "profileIcon"

export const getIconsToDisplay = (
  tutorialStep: number,
  tutorialOn: boolean
) => {
  const allIcons: IconNames[] = [
    "tutorialIcon",
    "settingsIcon",
    "cartIcon",
    "profileIcon",
  ]
  if (!tutorialOn) return allIcons

  const icons: IconNames[] = []
  if (tutorialStep >= 3) {
    icons.push("tutorialIcon")
  }
  if (tutorialStep >= 4) {
    icons.push("cartIcon")
  }
  if (tutorialStep >= 5) {
    icons.push("profileIcon")
  }
  if (tutorialStep >= 6) {
    icons.push("settingsIcon")
  }
  return icons
}

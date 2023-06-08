import { twMerge } from "tailwind-merge"

type LoadingBarProps = {
  fill: number
  className?: string
}

export const LoadingBar = (props: LoadingBarProps) => {
  return (
    <div className={twMerge("flex gap-4", props.className)}>
      <svg
        width="5"
        height="10"
        viewBox="0 0 5 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.24121 10C4.39124 10.0004 4.53799 9.94822 4.66283 9.85011C4.78767 9.752 4.88497 9.61237 4.94238 9.44895C4.99979 9.28553 5.01472 9.10568 4.98528 8.93224C4.95584 8.75879 4.88336 8.59957 4.77703 8.47478L1.82966 4.99993L4.77703 1.52508C4.84739 1.44212 4.90321 1.34364 4.94129 1.23525C4.97937 1.12686 4.99897 1.01069 4.99897 0.893373C4.99897 0.776053 4.97937 0.659883 4.94129 0.551494C4.90321 0.443105 4.84739 0.34462 4.77703 0.261662C4.70666 0.178705 4.62313 0.1129 4.53119 0.0680039C4.43926 0.0231077 4.34072 -2.31264e-09 4.24121 0C4.1417 2.31264e-09 4.04317 0.0231077 3.95123 0.0680039C3.85929 0.1129 3.77576 0.178705 3.70539 0.261662L0.222209 4.36822C0.151769 4.45113 0.0958838 4.5496 0.0577545 4.65799C0.0196257 4.76639 0 4.88258 0 4.99993C0 5.11728 0.0196257 5.23347 0.0577545 5.34187C0.0958838 5.45027 0.151769 5.54873 0.222209 5.63164L3.70539 9.7382C3.77568 9.82129 3.8592 9.8872 3.95115 9.93213C4.0431 9.97705 4.14168 10.0001 4.24121 10Z"
          fill="white"
        />
      </svg>

      <div className="h-3 w-[192px] rounded-md border-none bg-white">
        <div
          className={`h-full max-w-full rounded-md border-none bg-black`}
          style={{
            width: `${props.fill}%`,
          }}
        ></div>
      </div>
      <svg
        width="5"
        height="10"
        viewBox="0 0 5 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.758788 10C0.608756 10.0004 0.462009 9.94822 0.337171 9.85011C0.212333 9.752 0.115034 9.61237 0.0576234 9.44895C0.00021286 9.28553 -0.0147206 9.10568 0.0147186 8.93224C0.0441579 8.75879 0.116642 8.59957 0.222972 8.47478L3.17034 4.99993L0.222972 1.52508C0.152607 1.44212 0.0967914 1.34364 0.0587104 1.23525C0.0206294 1.12686 0.00102947 1.01069 0.00102947 0.893373C0.00102947 0.776053 0.0206295 0.659883 0.0587104 0.551494C0.0967914 0.443105 0.152607 0.34462 0.222972 0.261662C0.293336 0.178705 0.376871 0.1129 0.468806 0.0680039C0.560742 0.0231077 0.659278 -2.31264e-09 0.758788 0C0.858298 2.31264e-09 0.956834 0.0231077 1.04877 0.0680039C1.14071 0.1129 1.22424 0.178705 1.29461 0.261662L4.77779 4.36822C4.84823 4.45113 4.90412 4.5496 4.94225 4.65799C4.98037 4.76639 5 4.88258 5 4.99993C5 5.11728 4.98037 5.23347 4.94225 5.34187C4.90412 5.45027 4.84823 5.54873 4.77779 5.63164L1.29461 9.7382C1.22432 9.82129 1.1408 9.8872 1.04885 9.93213C0.956899 9.97705 0.858324 10.0001 0.758788 10Z"
          fill="white"
        />
      </svg>
    </div>
  )
}
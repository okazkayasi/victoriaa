type Deg =
  | "0deg"
  | "45deg"
  | "90deg"
  | "135deg"
  | "180deg"
  | "225deg"
  | "270deg"
  | "315deg"

const FillPath = (props: { deg: Deg }) => {
  const translateX: Record<Deg, number> = {
    "0deg": 0,
    "45deg": 0,
    "90deg": 1,
    "135deg": 2,
    "180deg": 2,
    "225deg": 3,
    "270deg": 2,
    "315deg": 1,
  }

  const fillTranslateX: Record<Deg, number> = {
    "0deg": 0,
    "45deg": 0,
    "90deg": 0,
    "135deg": 0,
    "180deg": 1,
    "225deg": 0,
    "270deg": 0,
    "315deg": -0,
  }

  return (
    <>
      <g
        style={{
          transform: `rotate(${props.deg}) translateX(${
            translateX[props.deg]
          }px)`,
          transformOrigin: "50% 50%",
        }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M143.049 24.571C143.049 19.821 146.899 15.9704 151.649 15.9704C156.399 15.9704 160.25 19.821 160.25 24.571V95.639H143.049V24.571ZM151.649 16.8757C147.399 16.8757 143.954 20.321 143.954 24.571V94.7337H159.345V24.571C159.345 20.321 155.899 16.8757 151.649 16.8757Z"
          fill="#FFAD01"
        />

        {/*<g*/}
        {/*  style={{*/}
        {/*    transform: "translate(142.2px, 80px)",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <path*/}
        {/*    d="M0.501709 0.269287H18.5076V19.2811H0.501709V0.269287Z"*/}
        {/*    fill="#FFAD01"*/}
        {/*    style={{*/}
        {/*      transform: `translateX(${fillTranslateX[props.deg]}px)`,*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</g>*/}

        {/*<g*/}
        {/*  style={{*/}
        {/*    transform: "translate(142.2px, 62px)",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <path*/}
        {/*    d="M0.501709 0.269287H18.5076V19.2811H0.501709V0.269287Z"*/}
        {/*    fill="#FFAD01"*/}
        {/*    style={{*/}
        {/*      transform: `translateX(${fillTranslateX[props.deg]}px)`,*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</g>*/}

        {/*<g*/}
        {/*  style={{*/}
        {/*    transform: "translate(142.2px, 44px)",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <path*/}
        {/*    d="M0.501709 0.269287H18.5076V19.2811H0.501709V0.269287Z"*/}
        {/*    fill="#FFAD01"*/}
        {/*    style={{*/}
        {/*      transform: `translateX(${fillTranslateX[props.deg]}px)`,*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</g>*/}

        <g
          style={{
            transform: "translate(142.7px, 75px)",
          }}
        >
          <path
            d="M0 8.59091C0 3.84628 3.80558 0 8.5 0C13.1944 0 17.5 3.84628 17.5 8.59091V21H0V8.59091Z"
            fill="#FFAD01"
            style={{
              transform: `translateX(${fillTranslateX[props.deg]}px)`,
            }}
          />
        </g>
        <g
          style={{
            transform: "translate(143.2px, 60px)",
          }}
        >
          <path
            d="M0 8.59091C0 3.84628 3.80558 0 8.5 0C13.1944 0 17 3.84628 17 8.59091V21H0V8.59091Z"
            fill="#FFAD01"
            style={{
              transform: `translateX(${fillTranslateX[props.deg]}px)`,
            }}
          />
        </g>
        <g
          style={{
            transform: "translate(143.2px, 45px)",
          }}
        >
          <path
            d="M0 8.59091C0 3.84628 3.80558 0 8.5 0C13.1944 0 17 3.84628 17 8.59091V21H0V8.59091Z"
            fill="#FFAD01"
            style={{
              transform: `translateX(${fillTranslateX[props.deg]}px)`,
            }}
          />
        </g>
        <g
          style={{
            transform: "translate(143.2px, 30px)",
          }}
        >
          <path
            d="M0 8.59091C0 3.84628 3.80558 0 8.5 0C13.1944 0 17 3.84628 17 8.59091V21H0V8.59091Z"
            fill="#FFAD01"
            style={{
              transform: `translateX(${fillTranslateX[props.deg]}px)`,
            }}
          />
        </g>
        <g
          style={{
            transform: "translate(143.2px, 16px)",
          }}
        >
          <path
            d="M0 8.59091C0 3.84628 3.80558 0 8.5 0C13.1944 0 17 3.84628 17 8.59091V21H0V8.59091Z"
            fill="#FFAD01"
            style={{
              transform: `translateX(${fillTranslateX[props.deg]}px)`,
            }}
          />
        </g>
      </g>
    </>
  )
}

export const ProfileGraph = () => {
  return (
    <svg
      width="306"
      height="280"
      viewBox="0 0 306 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M113.597 10.4136L113.2 8.09737H111.321L110.925 10.4136H109.544L111.333 0.704724H113.234L115.011 10.4136H113.597ZM112.261 2.61877L111.582 6.54395H112.929L112.261 2.61877Z"
        fill="#FFAD01"
      />
      <path
        d="M120.402 0.704724V10.4136H118.908L116.881 3.72836V10.4136H115.557V0.704724H117.13L119.089 7.19583V0.704724H120.402Z"
        fill="#FFAD01"
      />
      <path
        d="M124.019 2.34137V10.4136H122.616V2.34137H121.02V0.704724H125.604V2.34137H124.019Z"
        fill="#FFAD01"
      />
      <path
        d="M127.627 0.704724V10.4136H126.224V0.704724H127.627Z"
        fill="#FFAD01"
      />
      <path
        d="M131.407 5.79497V7.18196H128.668V5.79497H131.407Z"
        fill="#FFAD01"
      />
      <path
        d="M133.862 0.704724V10.4136H132.458V0.704724H133.862Z"
        fill="#FFAD01"
      />
      <path
        d="M141.218 0.704724V10.4136H139.894V2.95165L138.683 10.4136H137.381L136.17 2.95165V10.4136H134.846V0.704724H136.928L138.06 8.26381L139.204 0.704724H141.218Z"
        fill="#FFAD01"
      />
      <path
        d="M143.577 2.28589V5.6008H144.132C144.471 5.6008 144.717 5.47134 144.867 5.21244C145.018 4.94429 145.094 4.51432 145.094 3.92254C145.094 3.32151 145.018 2.90079 144.867 2.66038C144.724 2.41072 144.479 2.28589 144.132 2.28589H143.577ZM143.611 7.16809V10.4136H142.208V0.704724H144.256C145.018 0.704724 145.584 0.954382 145.954 1.4537C146.331 1.95301 146.52 2.75747 146.52 3.86706C146.52 4.9674 146.328 5.79497 145.943 6.34977C145.558 6.89532 144.954 7.16809 144.132 7.16809H143.611Z"
        fill="#FFAD01"
      />
      <path
        d="M150.995 8.83248V10.4136H147.248V0.704724H150.995V2.28589H148.652V4.67151H150.678V6.16946H148.652V8.83248H150.995Z"
        fill="#FFAD01"
      />
      <path
        d="M151.813 10.4136V0.704724H153.896C155.36 0.704724 156.092 1.63863 156.092 3.50644C156.092 4.87494 155.76 5.7811 155.096 6.22494L156.42 10.4136H154.892L153.726 6.57169H153.217V10.4136H151.813ZM153.183 2.28589V5.05987H153.783C154.084 5.05987 154.303 4.95353 154.439 4.74086C154.583 4.52819 154.654 4.16295 154.654 3.64514C154.654 3.18281 154.586 2.84069 154.45 2.61877C154.315 2.39685 154.088 2.28589 153.771 2.28589H153.183Z"
        fill="#FFAD01"
      />
      <path
        d="M158.456 6.30816V10.4136H157.053V0.704724H160.618V2.28589H158.456V4.75473H160.471V6.30816H158.456Z"
        fill="#FFAD01"
      />
      <path
        d="M165.066 8.83248V10.4136H161.319V0.704724H165.066V2.28589H162.723V4.67151H164.749V6.16946H162.723V8.83248H165.066Z"
        fill="#FFAD01"
      />
      <path
        d="M169.895 8.59669V10.1917C169.578 10.4229 169.11 10.5385 168.491 10.5385C167.502 10.5385 166.767 10.1594 166.284 9.40114C165.808 8.64292 165.571 7.40388 165.571 5.68401C165.571 3.85319 165.812 2.5448 166.295 1.75884C166.778 0.972875 167.54 0.579895 168.582 0.579895C169.049 0.579895 169.483 0.672361 169.883 0.857293V2.4662C169.529 2.29976 169.17 2.21654 168.808 2.21654C168.197 2.21654 167.752 2.46158 167.472 2.95165C167.193 3.44172 167.054 4.3109 167.054 5.55919C167.054 6.78898 167.189 7.65354 167.461 8.15286C167.733 8.65217 168.178 8.90183 168.797 8.90183C169.166 8.90183 169.532 8.80012 169.895 8.59669Z"
        fill="#FFAD01"
      />
      <path
        d="M173.44 2.34137V10.4136H172.037V2.34137H170.441V0.704724H175.025V2.34137H173.44Z"
        fill="#FFAD01"
      />
      <path
        d="M177.048 0.704724V10.4136H175.645V0.704724H177.048Z"
        fill="#FFAD01"
      />
      <path
        d="M180.613 8.95731C181.036 8.95731 181.345 8.7169 181.541 8.23607C181.738 7.75525 181.836 6.86296 181.836 5.55919C181.836 4.65302 181.787 3.95028 181.688 3.45096C181.59 2.9424 181.455 2.60028 181.281 2.42459C181.107 2.24891 180.874 2.16106 180.579 2.16106C180.157 2.16106 179.843 2.40147 179.64 2.8823C179.436 3.36312 179.334 4.25542 179.334 5.55919C179.334 6.43761 179.387 7.13573 179.493 7.65354C179.606 8.1621 179.749 8.50885 179.923 8.69378C180.104 8.86947 180.334 8.95731 180.613 8.95731ZM180.602 10.5385C179.674 10.5385 178.983 10.1547 178.53 9.38727C178.078 8.61981 177.851 7.34378 177.851 5.55919C177.851 3.76535 178.078 2.48932 178.53 1.7311C178.983 0.963629 179.666 0.579895 180.579 0.579895C181.522 0.579895 182.217 0.968252 182.662 1.74497C183.107 2.51243 183.33 3.78384 183.33 5.55919C183.33 7.36227 183.103 8.64292 182.651 9.40114C182.198 10.1594 181.515 10.5385 180.602 10.5385Z"
        fill="#FFAD01"
      />
      <path
        d="M188.979 0.704724V10.4136H187.485L185.458 3.72836V10.4136H184.134V0.704724H185.707L187.666 7.19583V0.704724H188.979Z"
        fill="#FFAD01"
      />
      <path
        d="M189.857 10.1085V8.54121C190.25 8.82786 190.71 8.97118 191.238 8.97118C191.902 8.97118 192.234 8.58282 192.234 7.80611C192.234 7.427 192.174 7.12648 192.053 6.90456C191.932 6.6734 191.706 6.4145 191.374 6.12785L191.182 5.97528C190.691 5.56843 190.336 5.14309 190.118 4.69925C189.906 4.24617 189.801 3.71911 189.801 3.11808C189.801 2.32288 189.993 1.70336 190.378 1.25952C190.763 0.806437 191.287 0.579895 191.951 0.579895C192.525 0.579895 193.015 0.690854 193.423 0.912772V2.45233C193.045 2.24891 192.623 2.14719 192.155 2.14719C191.559 2.14719 191.261 2.48007 191.261 3.14582C191.261 3.42322 191.336 3.68213 191.487 3.92254C191.638 4.16295 191.925 4.44959 192.347 4.78247L192.54 4.92117C193.34 5.50371 193.74 6.42836 193.74 7.69515C193.74 8.57357 193.536 9.26707 193.128 9.77563C192.721 10.2842 192.159 10.5385 191.442 10.5385C190.778 10.5385 190.25 10.3952 189.857 10.1085Z"
        fill="#FFAD01"
      />
      <path
        d="M285.864 143.49V145.085C285.548 145.316 285.082 145.432 284.466 145.432C283.481 145.432 282.748 145.053 282.267 144.295C281.793 143.536 281.556 142.297 281.556 140.577C281.556 138.747 281.797 137.438 282.278 136.652C282.759 135.866 283.518 135.473 284.556 135.473C285.022 135.473 285.454 135.566 285.853 135.751V137.36C285.499 137.193 285.142 137.11 284.781 137.11C284.172 137.11 283.729 137.355 283.451 137.845C283.173 138.335 283.033 139.204 283.033 140.453C283.033 141.682 283.169 142.547 283.439 143.046C283.71 143.546 284.154 143.795 284.77 143.795C285.138 143.795 285.503 143.694 285.864 143.49Z"
        fill="#FFAD01"
      />
      <path
        d="M290.267 143.67V145.307H286.692V135.598H288.091V143.67H290.267Z"
        fill="#FFAD01"
      />
      <path
        d="M294.709 143.726V145.307H290.976V135.598H294.709V137.179H292.374V139.565H294.393V141.063H292.374V143.726H294.709Z"
        fill="#FFAD01"
      />
      <path
        d="M299.22 145.307L298.826 142.991H296.954L296.559 145.307H295.183L296.965 135.598H298.859L300.63 145.307H299.22ZM297.89 137.512L297.213 141.437H298.555L297.89 137.512Z"
        fill="#FFAD01"
      />
      <path
        d="M306 135.598V145.307H304.511L302.493 138.622V145.307H301.174V135.598H302.741L304.692 142.089V135.598H306Z"
        fill="#FFAD01"
      />
      <path
        d="M4.88255 223.415V233.124H3.47128V228.921H1.41127V233.124H0V223.415H1.41127V227.326H3.47128V223.415H4.88255Z"
        fill="#FFAD01"
      />
      <path
        d="M8.691 229.379V233.124H7.27972V229.379L5.35629 223.415H6.91552L7.99674 227.271L9.04381 223.415H10.603L8.691 229.379Z"
        fill="#FFAD01"
      />
      <path
        d="M12.5035 224.996V231.543H12.9815C13.5506 231.543 13.9565 231.284 14.1993 230.766C14.4421 230.239 14.5635 229.383 14.5635 228.2C14.5635 227.007 14.4497 226.175 14.2221 225.703C14.0021 225.232 13.6113 224.996 13.0498 224.996H12.5035ZM12.9929 233.124H11.0923V223.415H13.084C14.1614 223.415 14.9164 223.798 15.3488 224.566C15.7889 225.324 16.009 226.508 16.009 228.117C16.009 229.837 15.7662 231.103 15.2806 231.917C14.795 232.721 14.0324 233.124 12.9929 233.124Z"
        fill="#FFAD01"
      />
      <path
        d="M16.8162 233.124V223.415H18.9104C20.3823 223.415 21.1183 224.349 21.1183 226.216C21.1183 227.585 20.7845 228.491 20.1168 228.935L21.4484 233.124H19.9119L18.7396 229.282H18.2275V233.124H16.8162ZM18.1933 224.996V227.77H18.7966C19.1001 227.77 19.3201 227.664 19.4567 227.451C19.6008 227.238 19.6729 226.873 19.6729 226.355C19.6729 225.893 19.6046 225.551 19.468 225.329C19.3315 225.107 19.1038 224.996 18.7852 224.996H18.1933Z"
        fill="#FFAD01"
      />
      <path
        d="M25.7371 233.124L25.3387 230.807H23.4494L23.0511 233.124H21.6626L23.4608 223.415H25.3729L27.1597 233.124H25.7371ZM24.3941 225.329L23.7112 229.254H25.0656L24.3941 225.329Z"
        fill="#FFAD01"
      />
      <path
        d="M29.6487 225.051V233.124H28.2374V225.051H26.6326V223.415H31.242V225.051H29.6487Z"
        fill="#FFAD01"
      />
      <path
        d="M34.7843 233.124L34.3859 230.807H32.4966L32.0983 233.124H30.7098L32.508 223.415H34.4201L36.2069 233.124H34.7843ZM33.4413 225.329L32.7584 229.254H34.1128L33.4413 225.329Z"
        fill="#FFAD01"
      />
      <path
        d="M38.6958 225.051V233.124H37.2846V225.051H35.6798V223.415H40.2892V225.051H38.6958Z"
        fill="#FFAD01"
      />
      <path
        d="M42.3237 223.415V233.124H40.9124V223.415H42.3237Z"
        fill="#FFAD01"
      />
      <path
        d="M45.9081 231.667C46.333 231.667 46.6441 231.427 46.8413 230.946C47.0386 230.465 47.1373 229.573 47.1373 228.269C47.1373 227.363 47.0879 226.66 46.9893 226.161C46.8907 225.652 46.7541 225.31 46.5796 225.135C46.4051 224.959 46.1698 224.871 45.8739 224.871C45.449 224.871 45.1342 225.111 44.9293 225.592C44.7244 226.073 44.622 226.965 44.622 228.269C44.622 229.148 44.6751 229.846 44.7813 230.364C44.8951 230.872 45.0393 231.219 45.2138 231.404C45.3959 231.579 45.6273 231.667 45.9081 231.667ZM45.8967 233.248C44.9634 233.248 44.2692 232.865 43.8139 232.097C43.3587 231.33 43.1311 230.054 43.1311 228.269C43.1311 226.475 43.3587 225.199 43.8139 224.441C44.2692 223.674 44.9558 223.29 45.8739 223.29C46.8224 223.29 47.5204 223.678 47.9681 224.455C48.4157 225.222 48.6396 226.494 48.6396 228.269C48.6396 230.072 48.4119 231.353 47.9567 232.111C47.5015 232.869 46.8148 233.248 45.8967 233.248Z"
        fill="#FFAD01"
      />
      <path
        d="M54.3195 223.415V233.124H52.8172L50.78 226.438V233.124H49.4484V223.415H51.0303L52.9993 229.906V223.415H54.3195Z"
        fill="#FFAD01"
      />
      <path
        d="M3.69006 143.752V145.309H0V135.749H3.69006V137.306H1.38238V139.655H3.37791V141.13H1.38238V143.752H3.69006ZM3.61202 132.757L2.24079 134.792H1.2709L2.01783 132.757H3.61202Z"
        fill="#FFAD01"
      />
      <path
        d="M8.4459 143.52V145.091C8.13375 145.318 7.67296 145.432 7.06352 145.432C6.08991 145.432 5.36528 145.059 4.88962 144.312C4.4214 143.565 4.18729 142.345 4.18729 140.652C4.18729 138.849 4.42511 137.56 4.90077 136.787C5.37643 136.013 6.12707 135.626 7.15271 135.626C7.6135 135.626 8.04085 135.717 8.43475 135.899V137.483C8.08544 137.319 7.73242 137.237 7.37567 137.237C6.77367 137.237 6.33517 137.479 6.06019 137.961C5.7852 138.444 5.6477 139.3 5.6477 140.529C5.6477 141.74 5.78148 142.591 6.04904 143.083C6.31659 143.575 6.75509 143.82 7.36453 143.82C7.7287 143.82 8.08916 143.72 8.4459 143.52Z"
        fill="#FFAD01"
      />
      <path
        d="M12.7988 143.697V145.309H9.26477V135.749H10.6472V143.697H12.7988Z"
        fill="#FFAD01"
      />
      <path
        d="M17.2409 145.309L16.8507 143.028H15.0001L14.6099 145.309H13.2498L15.0112 135.749H16.8841L18.6344 145.309H17.2409ZM15.9254 137.633L15.2565 141.499H16.5831L15.9254 137.633Z"
        fill="#FFAD01"
      />
      <path
        d="M21.0724 137.36V145.309H19.69V137.36H18.1181V135.749H22.6331V137.36H21.0724Z"
        fill="#FFAD01"
      />
      <path
        d="M19.4844 32.1329L19.0841 29.657H17.1859L16.7856 32.1329H15.3905L17.1973 21.7552H19.1185L20.9138 32.1329H19.4844ZM18.135 23.8011L17.4489 27.9966H18.8097L18.135 23.8011Z"
        fill="#FFAD01"
      />
      <path
        d="M26.3594 21.7552V32.1329H24.85L22.803 24.9871V32.1329H21.4651V21.7552H23.0546L25.0329 28.6934V21.7552H26.3594Z"
        fill="#FFAD01"
      />
      <path
        d="M30.0145 23.5046V32.1329H28.5965V23.5046H26.9841V21.7552H31.6154V23.5046H30.0145Z"
        fill="#FFAD01"
      />
      <path
        d="M33.6596 21.7552V32.1329H32.2416V21.7552H33.6596Z"
        fill="#FFAD01"
      />
      <path
        d="M37.4783 27.1961V28.6786H34.7109V27.1961H37.4783Z"
        fill="#FFAD01"
      />
      <path
        d="M42.1764 32.1329L41.7762 29.657H39.8779L39.4776 32.1329H38.0825L39.8893 21.7552H41.8105L43.6058 32.1329H42.1764ZM40.827 23.8011L40.1409 27.9966H41.5017L40.827 23.8011ZM41.536 18.6864L42.508 20.7175H41.456L40.8499 19.5907L40.2553 20.7175H39.2146L40.1752 18.6864H41.536Z"
        fill="#FFAD01"
      />
      <path
        d="M47.4654 30.428V28.1004H46.5163V26.4845H48.7233V31.6881C48.1973 32.0736 47.5874 32.2663 46.8936 32.2663C45.8645 32.2663 45.0945 31.8611 44.5837 31.0506C44.0805 30.2303 43.829 28.9059 43.829 27.0775C43.829 25.1304 44.0805 23.7369 44.5837 22.8968C45.0869 22.0468 45.8759 21.6218 46.9508 21.6218C47.5226 21.6218 47.9914 21.7256 48.3574 21.9331V23.6084C48.0296 23.4305 47.6331 23.3415 47.1681 23.3415C46.5353 23.3415 46.0665 23.6084 45.7615 24.1421C45.4566 24.6758 45.3041 25.6147 45.3041 26.9589C45.3041 28.2635 45.4337 29.1876 45.6929 29.7312C45.9521 30.2748 46.3638 30.5466 46.928 30.5466C47.1567 30.5466 47.3358 30.507 47.4654 30.428Z"
        fill="#FFAD01"
      />
      <path
        d="M53.4142 30.4428V32.1329H49.6291V21.7552H53.4142V23.4453H51.0471V25.9952H53.094V27.5963H51.0471V30.4428H53.4142Z"
        fill="#FFAD01"
      />
      <path
        d="M105.018 279.297V269.737H107.091C108.548 269.737 109.277 270.656 109.277 272.496C109.277 273.843 108.946 274.735 108.285 275.172L109.603 279.297H108.082L106.922 275.514H106.415V279.297H105.018ZM106.381 271.294V274.025H106.978C107.279 274.025 107.496 273.921 107.632 273.711C107.774 273.502 107.846 273.142 107.846 272.632C107.846 272.177 107.778 271.84 107.643 271.621C107.508 271.403 107.282 271.294 106.967 271.294H106.381Z"
        fill="#FFAD01"
      />
      <path
        d="M113.962 277.74V279.297H110.233V269.737H113.962V271.294H111.63V273.643H113.647V275.118H111.63V277.74H113.962Z"
        fill="#FFAD01"
      />
      <path
        d="M114.632 278.997V277.453C115.022 277.736 115.48 277.877 116.006 277.877C116.667 277.877 116.998 277.494 116.998 276.729C116.998 276.356 116.938 276.06 116.817 275.842C116.697 275.614 116.472 275.359 116.141 275.077L115.95 274.927C115.462 274.526 115.109 274.107 114.891 273.67C114.68 273.224 114.575 272.705 114.575 272.113C114.575 271.33 114.767 270.72 115.15 270.283C115.533 269.837 116.055 269.614 116.716 269.614C117.287 269.614 117.775 269.723 118.181 269.941V271.458C117.805 271.257 117.384 271.157 116.919 271.157C116.325 271.157 116.029 271.485 116.029 272.14C116.029 272.414 116.104 272.669 116.254 272.905C116.404 273.142 116.69 273.424 117.11 273.752L117.302 273.889C118.098 274.462 118.496 275.373 118.496 276.62C118.496 277.485 118.293 278.168 117.888 278.669C117.482 279.17 116.923 279.42 116.209 279.42C115.548 279.42 115.022 279.279 114.632 278.997Z"
        fill="#FFAD01"
      />
      <path
        d="M120.608 271.294V274.558H121.16C121.498 274.558 121.742 274.43 121.892 274.175C122.042 273.911 122.118 273.488 122.118 272.905C122.118 272.313 122.042 271.899 121.892 271.662C121.749 271.417 121.505 271.294 121.16 271.294H120.608ZM120.642 276.101V279.297H119.244V269.737H121.284C122.042 269.737 122.606 269.982 122.974 270.474C123.349 270.966 123.537 271.758 123.537 272.851C123.537 273.934 123.346 274.749 122.963 275.295C122.579 275.833 121.979 276.101 121.16 276.101H120.642Z"
        fill="#FFAD01"
      />
      <path
        d="M127.991 277.74V279.297H124.262V269.737H127.991V271.294H125.659V273.643H127.676V275.118H125.659V277.74H127.991Z"
        fill="#FFAD01"
      />
      <path
        d="M132.798 277.508V279.079C132.482 279.306 132.016 279.42 131.4 279.42C130.417 279.42 129.684 279.047 129.203 278.3C128.73 277.554 128.494 276.333 128.494 274.64C128.494 272.837 128.734 271.549 129.215 270.775C129.695 270.001 130.454 269.614 131.491 269.614C131.956 269.614 132.388 269.705 132.786 269.887V271.471C132.433 271.307 132.076 271.225 131.716 271.225C131.108 271.225 130.664 271.467 130.386 271.949C130.109 272.432 129.97 273.288 129.97 274.517C129.97 275.728 130.105 276.579 130.375 277.071C130.646 277.563 131.089 277.808 131.705 277.808C132.073 277.808 132.437 277.708 132.798 277.508Z"
        fill="#FFAD01"
      />
      <path
        d="M136.327 271.348V279.297H134.93V271.348H133.341V269.737H137.904V271.348H136.327Z"
        fill="#FFAD01"
      />
      <path
        d="M141.756 271.294V277.74H142.229C142.793 277.74 143.194 277.485 143.435 276.975C143.675 276.456 143.795 275.614 143.795 274.449C143.795 273.274 143.683 272.455 143.457 271.99C143.239 271.526 142.853 271.294 142.297 271.294H141.756ZM142.24 279.297H140.359V269.737H142.331C143.397 269.737 144.145 270.114 144.573 270.87C145.008 271.617 145.226 272.782 145.226 274.367C145.226 276.06 144.986 277.308 144.505 278.109C144.024 278.901 143.27 279.297 142.24 279.297Z"
        fill="#FFAD01"
      />
      <path
        d="M149.755 277.74V279.297H146.025V269.737H149.755V271.294H147.422V273.643H149.439V275.118H147.422V277.74H149.755Z"
        fill="#FFAD01"
      />
      <path
        d="M155.979 277.686V279.297H152.407V269.737H153.804V277.686H155.979Z"
        fill="#FFAD01"
      />
      <path
        d="M160.468 279.297L160.074 277.016H158.203L157.809 279.297H156.435L158.215 269.737H160.108L161.876 279.297H160.468ZM159.139 271.621L158.463 275.487H159.803L159.139 271.621Z"
        fill="#FFAD01"
      />
      <path
        d="M165.62 271.294V274.558H166.172C166.51 274.558 166.755 274.43 166.905 274.175C167.055 273.911 167.13 273.488 167.13 272.905C167.13 272.313 167.055 271.899 166.905 271.662C166.762 271.417 166.518 271.294 166.172 271.294H165.62ZM165.654 276.101V279.297H164.257V269.737H166.296C167.055 269.737 167.618 269.982 167.986 270.474C168.362 270.966 168.55 271.758 168.55 272.851C168.55 273.934 168.358 274.749 167.975 275.295C167.592 275.833 166.991 276.101 166.172 276.101H165.654Z"
        fill="#FFAD01"
      />
      <path
        d="M172.846 277.686V279.297H169.274V269.737H170.671V277.686H172.846Z"
        fill="#FFAD01"
      />
      <path
        d="M177.335 279.297L176.941 277.016H175.071L174.676 279.297H173.302L175.082 269.737H176.975L178.744 279.297H177.335ZM176.006 271.621L175.33 275.487H176.671L176.006 271.621Z"
        fill="#FFAD01"
      />
      <path
        d="M184.109 269.737V279.297H182.622L180.605 272.714V279.297H179.287V269.737H180.853L182.802 276.129V269.737H184.109Z"
        fill="#FFAD01"
      />
      <path
        d="M188.826 277.74V279.297H185.096V269.737H188.826V271.294H186.494V273.643H188.51V275.118H186.494V277.74H188.826ZM186.73 266.746L187.485 268.781H186.516L185.119 266.746H186.73Z"
        fill="#FFAD01"
      />
      <path
        d="M192.343 271.348V279.297H190.946V271.348H189.357V269.737H193.92V271.348H192.343Z"
        fill="#FFAD01"
      />
      <path
        d="M198.266 277.74V279.297H194.537V269.737H198.266V271.294H195.934V273.643H197.951V275.118H195.934V277.74H198.266Z"
        fill="#FFAD01"
      />
      <path
        d="M252.875 44.0355V53.9941H251.483V49.6835H249.451V53.9941H248.059V44.0355H249.451V48.0474H251.483V44.0355H252.875Z"
        fill="#FFAD01"
      />
      <path
        d="M257.564 52.3723V53.9941H253.848V44.0355H257.564V45.6573H255.24V48.1043H257.249V49.6408H255.24V52.3723H257.564Z"
        fill="#FFAD01"
      />
      <path
        d="M262.055 53.9941L261.662 51.6183H259.799L259.406 53.9941H258.036L259.81 44.0355H261.696L263.458 53.9941H262.055ZM260.73 45.9988L260.057 50.0249H261.393L260.73 45.9988Z"
        fill="#FFAD01"
      />
      <path
        d="M267.558 52.3154V53.9941H264V44.0355H265.392V52.3154H267.558Z"
        fill="#FFAD01"
      />
      <path
        d="M269.816 45.7143V53.9941H268.424V45.7143H266.841V44.0355H271.388V45.7143H269.816Z"
        fill="#FFAD01"
      />
      <path
        d="M276.819 44.0355V53.9941H275.427V49.6835H273.395V53.9941H272.003V44.0355H273.395V48.0474H275.427V44.0355H276.819Z"
        fill="#FFAD01"
      />
      <path
        d="M280.575 50.1529V53.9941H279.183V50.1529L277.286 44.0355H278.824L279.891 47.9905L280.924 44.0355H282.462L280.575 50.1529Z"
        fill="#FFAD01"
      />
      <path
        d="M253.798 224.195V234.027H252.307L250.286 227.257V234.027H248.964V224.195H250.534L252.488 230.769V224.195H253.798Z"
        fill="#FFAD01"
      />
      <path
        d="M258.378 234.027L257.983 231.682H256.108L255.713 234.027H254.335L256.12 224.195H258.017L259.79 234.027H258.378ZM257.046 226.134L256.368 230.109H257.712L257.046 226.134Z"
        fill="#FFAD01"
      />
      <path
        d="M262.259 225.853V234.027H260.859V225.853H259.267V224.195H263.84V225.853H262.259Z"
        fill="#FFAD01"
      />
      <path
        d="M267.666 230.474V224.195H269.066V230.614C269.066 231.906 268.87 232.819 268.479 233.353C268.095 233.887 267.515 234.154 266.74 234.154C265.987 234.154 265.411 233.896 265.012 233.381C264.613 232.857 264.413 231.935 264.413 230.614V224.195H265.814V230.474C265.814 231.232 265.878 231.761 266.006 232.061C266.134 232.351 266.378 232.496 266.74 232.496C267.108 232.496 267.353 232.351 267.474 232.061C267.602 231.761 267.666 231.232 267.666 230.474Z"
        fill="#FFAD01"
      />
      <path
        d="M270.005 234.027V224.195H272.083C273.544 224.195 274.274 225.141 274.274 227.033C274.274 228.418 273.943 229.336 273.28 229.786L274.602 234.027H273.077L271.914 230.137H271.406V234.027H270.005ZM271.372 225.796V228.606H271.97C272.272 228.606 272.49 228.498 272.625 228.283C272.768 228.067 272.84 227.697 272.84 227.173C272.84 226.705 272.772 226.358 272.637 226.134C272.501 225.909 272.275 225.796 271.959 225.796H271.372Z"
        fill="#FFAD01"
      />
      <path
        d="M278.97 232.426V234.027H275.233V224.195H278.97V225.796H276.633V228.212H278.654V229.729H276.633V232.426H278.97Z"
        fill="#FFAD01"
      />
      <path
        d="M283.367 232.37V234.027H279.787V224.195H281.187V232.37H283.367Z"
        fill="#FFAD01"
      />

      {/*anti-imperfections 0deg*/}

      <FillPath deg={"0deg"} />
      <FillPath deg={"45deg"} />
      <FillPath deg={"90deg"} />
      <FillPath deg={"135deg"} />
      <FillPath deg={"180deg"} />
      <FillPath deg={"225deg"} />
      <FillPath deg={"270deg"} />
      <FillPath deg={"315deg"} />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M142.866 92.9481V97.7103C142.866 99.7268 141.842 104.132 137.747 105.621C133.652 107.11 129.836 105.001 128.44 103.76L125.017 100.336C120.082 103.698 115.814 107.966 112.452 112.9L115.411 115.859C116.807 117.255 119.133 121.163 117.272 125.631C115.411 130.098 111.223 130.905 109.361 130.749H105.065C104.525 133.614 104.243 136.569 104.243 139.591C104.243 142.612 104.525 145.568 105.065 148.432H110.757C112.464 149.053 116.155 151.038 117.272 154.016C118.389 156.994 116.807 160.841 115.876 162.392L112.348 166.128C115.692 171.078 119.945 175.363 124.868 178.744L129.371 174.491C130.767 173.716 134.397 172.444 137.747 173.561C141.097 174.677 142.555 178.679 142.866 180.541V186.233C145.73 186.773 148.686 187.055 151.707 187.055C154.729 187.055 157.684 186.773 160.549 186.233V179.61C161.014 178.214 162.782 175.05 166.133 173.561C169.483 172.071 173.423 174.181 174.974 175.422L178.397 178.845C183.332 175.484 187.6 171.216 190.962 166.281L188.469 163.788C186.607 162.082 183.443 157.646 185.677 153.551C187.91 149.456 191.571 148.432 193.122 148.432H198.35C198.889 145.568 199.172 142.612 199.172 139.591C199.172 136.569 198.889 133.614 198.35 130.749H193.587C191.416 130.439 186.794 128.888 185.677 125.165C184.56 121.443 186.142 118.03 187.073 116.789L190.962 112.9C187.6 107.966 183.332 103.698 178.398 100.336L176.835 101.899C175.439 103.76 171.437 107.203 166.598 106.087C161.758 104.97 160.549 100.037 160.549 97.7105V92.9481C157.684 92.4085 154.729 92.1262 151.707 92.1262C148.686 92.1262 145.73 92.4085 142.866 92.9481Z"
        fill="#FFAD01"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152.072 114.527C138.014 114.527 126.618 125.923 126.618 139.98C126.618 154.038 138.014 165.434 152.072 165.434C166.129 165.434 177.525 154.038 177.525 139.98C177.525 125.923 166.129 114.527 152.072 114.527ZM123.536 139.98C123.536 124.221 136.312 111.445 152.072 111.445C167.831 111.445 180.607 124.221 180.607 139.98C180.607 155.74 167.831 168.516 152.072 168.516C136.312 168.516 123.536 155.74 123.536 139.98Z"
        fill="#1F29C7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152.09 114.581L152.09 111.608L152.96 111.608L152.96 114.581L152.09 114.581Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152.09 168.389L152.09 165.416L152.96 165.416L152.96 168.389L152.09 168.389Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M159.737 115.716L160.625 112.899L161.177 113.073L160.29 115.89L159.737 115.716Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M143.617 167.114L144.504 164.295L145.057 164.469L144.169 167.288L143.617 167.114Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M166.746 119.192L168.447 116.778L168.92 117.111L167.22 119.525L166.746 119.192Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M135.733 163.219L137.432 160.808L137.905 161.142L136.207 163.553L135.733 163.219Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M172.491 124.777L174.849 123.017L175.196 123.481L172.837 125.241L172.491 124.777Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M129.331 156.979L131.691 155.217L132.038 155.682L129.677 157.443L129.331 156.979Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M176.189 131.802L178.986 130.85L179.173 131.398L176.375 132.35L176.189 131.802Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M125.203 149.144L127.982 148.198L128.169 148.747L125.39 149.692L125.203 149.144Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M177.517 139.654L180.481 139.614L180.489 140.193L177.525 140.233L177.517 139.654Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M123.7 140.384L126.642 140.344L126.649 140.923L123.708 140.963L123.7 140.384Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M176.409 147.53L179.22 148.4L179.048 148.954L176.238 148.083L176.409 147.53Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M124.939 131.591L127.776 132.469L127.605 133.023L124.768 132.144L124.939 131.591Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M172.844 154.732L175.248 156.438L174.913 156.91L172.509 155.204L172.844 154.732Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M128.93 123.557L131.331 125.262L130.996 125.734L128.595 124.03L128.93 123.557Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M167.243 160.449L168.997 162.818L168.532 163.162L166.777 160.794L167.243 160.449Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M135.174 117.17L136.91 119.513L136.445 119.858L134.709 117.515L135.174 117.17Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M160.214 164.105L161.159 166.909L160.61 167.094L159.665 164.29L160.214 164.105Z"
        fill="#FFAD01"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M142.838 112.55L144.058 116.169L143.509 116.354L142.289 112.735L142.838 112.55Z"
        fill="#FFAD01"
      />
      <path
        d="M138.001 137.756H137.12C137.068 137.503 136.977 137.28 136.846 137.088C136.719 136.897 136.562 136.736 136.378 136.606C136.195 136.473 135.993 136.374 135.77 136.307C135.548 136.241 135.316 136.208 135.074 136.208C134.634 136.208 134.235 136.319 133.878 136.542C133.523 136.764 133.24 137.092 133.029 137.525C132.821 137.959 132.716 138.49 132.716 139.12C132.716 139.749 132.821 140.281 133.029 140.714C133.24 141.147 133.523 141.475 133.878 141.698C134.235 141.92 134.634 142.032 135.074 142.032C135.316 142.032 135.548 141.999 135.77 141.932C135.993 141.866 136.195 141.768 136.378 141.637C136.562 141.505 136.719 141.343 136.846 141.151C136.977 140.957 137.068 140.734 137.12 140.483H138.001C137.934 140.855 137.814 141.188 137.638 141.481C137.463 141.775 137.245 142.025 136.985 142.231C136.724 142.434 136.432 142.589 136.108 142.696C135.786 142.802 135.441 142.856 135.074 142.856C134.454 142.856 133.903 142.704 133.42 142.401C132.937 142.098 132.557 141.667 132.28 141.108C132.003 140.55 131.864 139.887 131.864 139.12C131.864 138.353 132.003 137.69 132.28 137.131C132.557 136.572 132.937 136.142 133.42 135.838C133.903 135.535 134.454 135.384 135.074 135.384C135.441 135.384 135.786 135.437 136.108 135.544C136.432 135.65 136.724 135.807 136.985 136.012C137.245 136.216 137.463 136.465 137.638 136.758C137.814 137.049 137.934 137.382 138.001 137.756ZM139.424 142.756V135.483H140.304V138.722H144.182V135.483H145.063V142.756H144.182V139.503H140.304V142.756H139.424ZM147.124 142.756H146.201L148.871 135.483H149.781L152.451 142.756H151.528L149.354 136.634H149.298L147.124 142.756ZM147.465 139.915H151.187V140.696H147.465V139.915ZM153.584 142.756V135.483H157.945V136.265H154.464V138.722H157.618V139.503H154.464V142.756H153.584ZM160.334 135.483V142.756H159.453V135.483H160.334ZM162.099 142.756V135.483H162.98V139.091H163.065L166.332 135.483H167.483L164.429 138.765L167.483 142.756H166.418L163.889 139.375L162.98 140.398V142.756H162.099Z"
        fill="#2232C4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152.09 164.879C165.831 164.879 176.97 153.739 176.97 139.999C176.97 126.258 165.831 115.118 152.09 115.118C138.349 115.118 127.21 126.258 127.21 139.999C127.21 153.739 138.349 164.879 152.09 164.879ZM152.09 165.457C166.151 165.457 177.549 154.059 177.549 139.999C177.549 125.938 166.151 114.54 152.09 114.54C138.029 114.54 126.631 125.938 126.631 139.999C126.631 154.059 138.029 165.457 152.09 165.457Z"
        fill="#1F29C7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M152.09 168.39C167.77 168.39 180.481 155.679 180.481 139.999C180.481 124.319 167.77 111.608 152.09 111.608C136.41 111.608 123.699 124.319 123.699 139.999C123.699 155.679 136.41 168.39 152.09 168.39ZM152.09 168.969C168.09 168.969 181.06 155.999 181.06 139.999C181.06 123.999 168.09 111.028 152.09 111.028C136.09 111.028 123.12 123.999 123.12 139.999C123.12 155.999 136.09 168.969 152.09 168.969Z"
        fill="#1F29C7"
      />
    </svg>
  )
}

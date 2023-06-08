export function CloseIcon(
  props: React.SVGProps<SVGSVGElement> & {
    color?: "white"
  }
) {
  const { color, ...rest } = props
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.999962 1.29291C1.19522 1.09765 1.51181 1.09765 1.70707 1.29291L15.7071 15.2929C15.9023 15.4882 15.9023 15.8048 15.7071 16C15.5118 16.1953 15.1952 16.1953 15 16L0.999962 2.00002C0.8047 1.80476 0.8047 1.48818 0.999962 1.29291Z"
        fill={color || "black"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7072 1.29292C15.9025 1.48818 15.9025 1.80476 15.7072 2.00002L1.70724 16C1.51198 16.1953 1.19539 16.1953 1.00013 16C0.804869 15.8048 0.804869 15.4882 1.00013 15.2929L15.0001 1.29292C15.1954 1.09765 15.512 1.09765 15.7072 1.29292Z"
        fill={color || "black"}
      />
    </svg>
  )
}

export function NFTIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.5 32.5V18.5L18.5 32.5V18.5"
        stroke="black"
        strokeLinecap="square"
      />
      <path
        d="M30 18.5H23V25.5M23 25.5H28M23 25.5V32.5"
        stroke="black"
        strokeLinecap="square"
      />
      <path d="M36 32.5V18.5H40H32" stroke="black" strokeLinecap="square" />
      <circle cx="25" cy="25" r="24.25" stroke="black" strokeWidth="1.5" />
    </svg>
  )
}

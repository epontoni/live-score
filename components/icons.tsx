import type { SVGProps } from "react";

export function IpetymLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 256 256"
      {...props}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      >
        <path
          fill="#fff"
          d="M221.4 69.833c-3.111-20.91-10.43-30.82-20.956-39.73C189.92 21.192 169.333 16 128 16c-41.333 0-61.92 5.192-72.444 14.103-10.526 8.91-17.845 18.82-20.956 39.73H221.4z"
        />
        <path
          fill="#0091EA"
          d="M213.333 154.667C224 138.667 224 122.667 224 109.333V74.667H128v58.666h96c0 10.667-5.333 21.334-10.667 29.334z"
        />
        <path
          fill="#fff"
          d="M128 74.667H32v34.666c0 13.334 0 29.334 10.667 45.334C53.333 170.667 64 184 80 192c16 8 34.667 10.667 48 10.667V74.667z"
        />
        <path
          fill="#0091EA"
          d="M128 133.333V202.667c13.333 0 32-2.667 48-10.667c16-8 26.667-21.333 37.333-37.333C218.667 146.667 224 136 224 125.333h-96z"
        />
        <path
          fill="none"
          d="M34.667 21.333C34.667 21.333 32 18.667 32 26.667v82.666C32 122.667 32 138.667 42.667 154.667C53.333 170.667 64 184 80 192c16 8 34.667 10.667 48 10.667c13.333 0 32-2.667 48-10.667c16-8 26.667-21.333 37.333-37.333C224 138.667 224 122.667 224 109.333V26.667c0-8-2.667-5.334-2.667-5.334"
        />
        <path
          fill="#FFC107"
          d="M109.333 144l-24-16-10.666 18.667 21.333 2.666 13.333-5.333zM48 144l24-16 10.667 18.667-21.334 2.666-13.333-5.333z"
        />
        <path
          fill="none"
          d="M93.333 117.333c0-10.666-10.666-18.666-21.333-18.666-13.333 0-21.333 10.666-21.333 21.333 0 5.334 2.667 10.667 5.333 13.334M101.333 104c-8-10.667-18.666-13.333-29.333-13.333-16 0-29.333 13.333-29.333 29.333 0 8 2.667 16 8 21.333"
        />
        <path
          fill="#fff"
          d="M197.333 96a16 16 0 10-32 0 16 16 0 0032 0zm-45.333 5.333a10.667 10.667 0 10-21.334 0 10.667 10.667 0 0021.334 0z"
        />
        <path
          fill="none"
          d="M141.333 117.333c18.667 0 34.667-8 42.667-21.333M213.333 117.333c-18.666 0-34.666-8-42.666-21.333"
        />
        <path fill="none" d="M48 181.333h53.333M64 165.333h42.667" />
        <path
          fill="none"
          d="M42.667 194.667c18.666 0 34.666-8 42.666-21.334M114.667 194.667c-18.667 0-34.667-8-42.667-21.334"
        />
        <path
          fill="#4CAF50"
          d="M192 181.333c-2.667 5.334-8 8-13.333 8s-10.667-2.666-13.334-8c2.667-5.333 8-8 13.334-8s10.666 2.667 13.333 8z"
        />
        <path
          fill="none"
          d="M165.333 192c0 8-5.333 10.667-13.333 10.667s-13.333-2.667-13.333-10.667"
        />
        <path
          fill="none"
          d="M192 154.667h-10.667M154.667 154.667h10.666M213.333 154.667c-13.333 0-29.333-13.334-37.333-21.334-10.667-8-21.334-13.333-34.667-13.333-13.333 0-24 5.333-34.666 13.333-8 8-24 21.334-37.334 21.334"
        />
      </g>
      <text
        x="50%"
        y="42"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        fontSize="32"
        fontWeight="bold"
      >
        IPETYM 256
      </text>
      <text
        x="50%"
        y="62"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        fontSize="12"
        fontWeight="bold"
      >
        LIBERTADOR GRAL. DON JOSÉ DE SAN MARTÍN
      </text>
      <text
        x="50%"
        y="76"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        fontSize="12"
        fontWeight="bold"
      >
        LEONES (CBA)
      </text>
    </svg>
  );
}

/*
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 21v-4" />
      <path d="M17 21v-4" />
      <path d="M12 21v-4" />
      <path d="M4 17h16" />
      <path d="M4 12h16" />
      <path d="M4 7h16" />
      <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
    </svg>
  );
}
*/

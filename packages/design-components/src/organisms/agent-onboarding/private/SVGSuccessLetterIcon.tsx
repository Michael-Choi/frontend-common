import React from 'react';

export type SVGSuccessLetterIcon = React.SVGProps<SVGSVGElement>;

export const SVGSuccessLetterIcon: React.FC<SVGSuccessLetterIcon> = (props) => {
  return (
    <svg
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="38" cy="37.877" r="37.3262" fill="#F6FFED" />
      <rect
        width="24"
        height="24"
        transform="translate(26 26.2031)"
        fill="#F6FFED"
      />
      <path
        d="M47.75 29.9531H28.25C27.8352 29.9531 27.5 30.2883 27.5 30.7031V45.7031C27.5 46.118 27.8352 46.4531 28.25 46.4531H47.75C48.1648 46.4531 48.5 46.118 48.5 45.7031V30.7031C48.5 30.2883 48.1648 29.9531 47.75 29.9531ZM45.8563 32.5055L38.4617 38.2594C38.2789 38.4023 38.0234 38.4023 37.8406 38.2594L30.4438 32.5055C30.4159 32.4839 30.3954 32.4542 30.3853 32.4205C30.3751 32.3868 30.3758 32.3507 30.3871 32.3174C30.3985 32.2841 30.42 32.2551 30.4487 32.2346C30.4773 32.2141 30.5117 32.2031 30.5469 32.2031H45.7531C45.7883 32.2031 45.8227 32.2141 45.8513 32.2346C45.88 32.2551 45.9015 32.2841 45.9129 32.3174C45.9242 32.3507 45.9249 32.3868 45.9147 32.4205C45.9046 32.4542 45.8841 32.4839 45.8563 32.5055Z"
        fill="#52C41A"
      />
    </svg>
  );
};
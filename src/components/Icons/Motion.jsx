import * as React from "react";
const SvgMotion = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M12 12 4 4v16L20 4v16l-4-4" />
      <path d="m20 12-8 8-4-4" />
    </g>
  </svg>
);
export default SvgMotion;

import * as React from "react";
const SvgFigma = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <path fill="currentColor" d="M26 17h-8a7 7 0 1 1 0-14h8z" />
    <path fill="currentColor" d="M25 31h-7a7 7 0 1 1 0-14h7z" />
    <path fill="currentColor" d="M18 45a7 7 0 1 1 0-14h7v7a7 7 0 0 1-7 7" />
    <path fill="currentColor" d="M32 17h-7V3h7a7 7 0 1 1 0 14" />
    <circle cx={32} cy={24} r={7} fill="currentColor" />
  </svg>
);
export default SvgFigma;

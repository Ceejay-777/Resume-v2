import React from "react";

const Close = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 border-2 border-sec rounded-full p-2 box-content text-sec transition-all hover:scale-110 nav-close"
      onClick={() => {
        setSidebarOpen(false);
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default Close;

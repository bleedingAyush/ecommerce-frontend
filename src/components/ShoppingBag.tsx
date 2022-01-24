import React from "react";

interface styles {
  style: object;
  className: string;
}

const ShoppingBag = ({ style, className }: styles) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1.22em"
      height="1.22em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      style={style}
      className={className}
    >
      <g fill="none">
        <path
          d="M3.977 9.84A2 2 0 0 1 5.971 8h12.058a2 2 0 0 1 1.994 1.84l.803 10A2 2 0 0 1 18.833 22H5.167a2 2 0 0 1-1.993-2.16l.803-10z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 11V6a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default ShoppingBag;

import React, { PureComponent } from "react";

export default class LineHeightIcon extends PureComponent {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_1573)">
          <path fill="#AAB2BB" d="M8 13h8v2H6l2-2z"></path>
          <path fill="#AAB2BB" d="M6 5H16V7H6z"></path>
          <path fill="#AAB2BB" d="M6 9H16V11H6z"></path>
          <path fill="#AAB2BB" d="M6 1h10v2H8L6 1z"></path>
          <path
            stroke="#AAB2BB"
            strokeLinecap="round"
            strokeWidth="2"
            d="M3 1.5l-.5.5h1L3 1.5zm0 0v13m0 0l.5-.5h-1l.5.5z"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1573">
            <path fill="#fff" d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
}

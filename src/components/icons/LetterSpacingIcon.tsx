import React, { PureComponent } from "react";

export default class LetterSpacingIcon extends PureComponent {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_1572)">
          <path
            fill="#AAB2BB"
            d="M8 0l.922-.388a1 1 0 00-1.844 0L8 0zm2.8 8a1 1 0 100-2v2zM4.922 9.888l4-9.5-1.844-.776-4 9.5 1.844.776zm2.156-9.5l4 9.5 1.844-.776-4-9.5-1.844.776zM5.2 8h5.6V6H5.2v2z"
          />
          <path
            stroke="#AAB2BB"
            strokeLinecap="round"
            strokeWidth="2"
            d="M1.5 13l.5.5v-1l-.5.5zm0 0h13m0 0l-.5-.5v1l.5-.5z"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1572">
            <path fill="#fff" d="M0 0H16V16H0z" transform="rotate(-90 8 8)" />
          </clipPath>
        </defs>
      </svg>
    );
  }
}

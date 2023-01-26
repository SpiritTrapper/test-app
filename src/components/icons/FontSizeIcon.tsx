import React, { PureComponent } from "react";

export default class FontSizeIcon extends PureComponent {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
      >
        <path
          fill="#AAB2BB"
          fillRule="evenodd"
          d="M0 4h4v10h2V4h4V2H0v2z"
          clipRule="evenodd"
        />
        <path fill="#AAB2BB" d="M11 9H8V7h8v2h-3v5.038L11 14V9z" />
      </svg>
    );
  }
}

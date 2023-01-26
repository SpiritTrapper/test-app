import React, { PureComponent } from "react";

export default class ArrowIcon extends PureComponent {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="5"
        fill="none"
        viewBox="0 0 9 5"
      >
        <path
          stroke="#AAB2BB"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1l3.5 3L8 1"
        />
      </svg>
    );
  }
}

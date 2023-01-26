import React, { PureComponent } from "react";

interface Props {
  fill?: string;
}

export default class AlignCenterIcon extends PureComponent<Props> {
  render() {
    const { fill = "#AAB2BB" } = this.props;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        opacity={fill === "#AAB2BB" ? 0.5 : 1}
      >
        <path fill={fill} d="M4 13H12V15H4z" />
        <path fill={fill} d="M0 1H16V3H0z" />
        <path fill={fill} d="M0 9H16V11H0z" />
        <path fill={fill} d="M0 5H16V7H0z" />
      </svg>
    );
  }
}

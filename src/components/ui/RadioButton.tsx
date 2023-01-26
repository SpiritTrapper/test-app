import { PureComponent, ReactElement, cloneElement } from "react";
import styled from "styled-components";
import classNames from "classnames";

export interface RadioButtonProps {
  id: string;
  name: string;
  icon: ReactElement;
  onChange: (id: string) => void;
  isChecked: boolean;
}

export default class RadioButton extends PureComponent<RadioButtonProps> {
  render() {
    const { id, name, isChecked, icon, onChange } = this.props;
    return (
      <Label htmlFor={id}>
        <input
          type="radio"
          name={name}
          defaultChecked={isChecked}
          id={id}
          hidden
        />
        <PseudoBtn
          className={classNames({ isChecked })}
          onClick={() => onChange(id)}
        >
          {cloneElement(icon, {
            fill: isChecked ? "#2198ED" : "#AAB2BB",
          })}
        </PseudoBtn>
      </Label>
    );
  }
}

const Label = styled.label`
  width: calc(25% + 1px);
  height: 40px;
  margin-left: -1px;
`;

const PseudoBtn = styled.button`
  cursor: pointer;
  background: none;
  border-radius: 0;
  border: 1px solid var(--grey1);
  width: 100%;
  height: 100%;
`;

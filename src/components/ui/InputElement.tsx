import React, { ChangeEvent, PureComponent, ReactElement } from "react";
import styled from "styled-components";

export type AppControlTypes =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

interface Props {
  type: string;
  value: string | number;
  onChange: (event: ChangeEvent<AppControlTypes>) => void;
  icon: ReactElement;
  placeholder: string;
  name: string;
  step?: number;
  className?: string;
}

const Wrapper = styled.div`
  position: relative;
  width: 50%;

  > svg {
    position: absolute;
    top: 12px;
    left: 10px;
  }
`;

const Input = styled.input`
  border: 1px solid var(--grey1);
  border-radius: 4px;
  margin-bottom: 11px;
  font-size: 12px;
  width: 100%;
  height: 40px;
  padding: 10px 10px 10px 34px;
  outline: none;
`;

export default class InputElement extends PureComponent<Props> {
  render() {
    const { icon, className, ...props } = this.props;
    return (
      <Wrapper className={className}>
        {icon}
        <Input {...props} />
      </Wrapper>
    );
  }
}

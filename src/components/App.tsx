import React, { PureComponent } from "react";
import { GlobalStyles } from "./GlobalStyles";
import TextEditor from "./TextEditor";
import styled from "styled-components";

export default class App extends PureComponent {
  render() {
    return (
      <Wrapper>
        <GlobalStyles />
        <TextEditor />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: var(--grey0);
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    position: relative;
    font-family: 'Fira Sans', sans-serif;
    font-size: 12px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    
    background: var(--white);
    color: var(--black0);
    --black0: #333333;
    --black1: #292929;
    --white: #ffffff;
    --grey0: #F4F4F4;
    --grey1: #E8ECF0;
    --grey2: #AAB2BB;
    --grey3: #788994;
    --blue: #2198ED;
    --green: #27AE60;
  }
`;

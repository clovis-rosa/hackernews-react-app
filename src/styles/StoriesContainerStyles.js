/* eslint-disable import/prefer-default-export */
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --font-family-secondary: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}

html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

body { 
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  color: #0a0a23;
  background-color: #ffffff;
  margin: 0;
  padding: 0;
}

h1 {
  font-family: 'Lato', var(--font-family-secondary);
  font-size: 28px;
}

h2 {
  font-family: 'Lato', var(--font-family-secondary);
  font-size: 16px;
}

p, span {
  font-family: 'Roboto', var(--font-family-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 27px;
}

ul {
  margin: 0;
  padding: 0;
}

`;

export const StoriesContainerWrapper = styled.main`
  max-width: 80%;
  width: 800px;
  padding: 20px 15px;
  margin: auto;
`;

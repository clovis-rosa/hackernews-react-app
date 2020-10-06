/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --color-black-01: #000;
  --color-black-02: #333;
  --color-blue-01: #e1eff8; /* lightest blue */
  --color-blue-02: #e1f1f4; /* lightest blue-ish */
  --color-blue-03: #00254d; /* blue */
  --background-yellow-01: #fff8d6; /* yellow */
  --background-yellow-02: #fefbf2; /* yellow-ish */
  --background-orange-01: #ff6a5c; /* orange-ish */
  --background-orange-02: #f7c364; /* orange */
  --background-violete-01: rgba(42, 14, 102, 0.32); /* light violete */
  --background-green-01: #edfcf1; /* light green-ish */
  --background-green-02: #54c5c1; /* nav blue */
  --background-green-03: #007e7a; /* green-ish  */
}

body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  font-size: 16px;
  font-weight: 400px;
  color: var(--color-black-01);
  background: var(--background-yellow-02);
  margin: 0;
  padding: 0;

  ${
    '' /* a {
    color: var(--background-green-02);
    text-decoration: none;
    &:hover {
      color: var(--background-green-03);
    }
  } */
  }

  .container {
    max-width: 80%;
    width: 800px;
    margin: 0 auto
  }
}
  
`;

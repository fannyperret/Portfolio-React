// global.js
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  .rounded-img {
    border-color: ${({ theme }) => theme.border};
  }

  .navbar-light .navbar-nav .nav-link {
    color: ${({ theme }) => theme.a};
  }

  .navbar-light .navbar-nav .nav-link:hover {
    color: ${({ theme }) => theme.hover};
  }

  .navbar-light .navbar-nav .nav-link:active {
    color: ${({ theme }) => theme.active};
  }

  `


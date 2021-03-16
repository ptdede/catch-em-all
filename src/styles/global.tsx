import { css, Global } from "@emotion/react";
import { normalize } from "./normalize";

export const globalStyles = (
  <Global
    styles={css`
      ${normalize}

      h1, h2, h3, h4, h5, h6, p, a, ul, ol, li, button, div {
        font-family: "Londrina Solid", sans-serif;
      }

      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      main {
        box-sizing: border-box;
      }
    `}
  />
);

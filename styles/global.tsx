import { css, Global, keyframes } from '@emotion/react'
import { normalize } from './normalize'

export const globalStyles = (
  <Global
    styles={css`
      ${normalize}

      h1, h2, h3, h4, h5, h6, p, a, ul, ol, li, button, div {
        font-family: 'Hind', sans-serif;
      }
    `}
  />
)

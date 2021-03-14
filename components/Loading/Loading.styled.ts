// Design & Code taken from: https://codepen.io/raubaca/pen/obaZmG
// With modification for the size

import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

type ISize = "s" | "m"

type ILoadingProps = {
  size: ISize,
  infinity: boolean
}

const blinkKeyframe = keyframes`
  from { background: #eee;}
  to { background: #e74c3c; }
`
const shakeKeyframe = keyframes`
  0 { transform: translate(0, 0) rotate(0); }
  20% { transform: translate(-10px, 0) rotate(-20deg); }
  30% { transform: translate(10px, 0) rotate(20deg); }
  50% { transform: translate(-10px, 0) rotate(-10deg); }
  60% { transform: translate(10px, 0) rotate(10deg); }
  100% { transform: translate(0, 0) rotate(0); }
`
const fallKeyframe = keyframes`
  0% { top: -50px }
  60% { top: 0 }
  80% { top: -10px }
  100% { top: 0 }
`

const Pokeball = styled.div<ILoadingProps>`
  --size: 100px;
  --size-misc: 5px;
  --anim-duration: 3;

  ${p => p.size === "s" && css`
    --size: 50px;
    --size-misc: 3px;
  `}

  ${p => !!p.infinity && css`
    --anim-duration: infinite;
  `}

  position: relative;
  width: var(--size);
  height: var(--size);
  background: #fff;
  border: var(--size-misc) solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset calc(var(--size-misc) * -1) var(--size-misc) 0 var(--size-misc) #ccc;
  animation: ${fallKeyframe} .25s ease-in-out,
             ${shakeKeyframe} 1.25s cubic-bezier(.36,.07,.19,.97) var(--anim-duration);
  
  &::before, &::after {
    content:"";
    position: absolute;
  }

  &::before {
    background: red;
    width: 100%;
    height: 50%;
  }

  &::after {
    top: calc(50% - var(--size-misc));
    width: 100%;
    height: calc(var(--size-misc) * 2);
    background: #000;
  }
`

const PokeballButton =  styled.div<ILoadingProps>`
  --size: 30px;
  --size-misc: 5px;
  --anim-duration: 7;

  ${p => p.size === "s" && css`
    --size: 15px;
    --size-misc: 2.5px;
  `}

  ${p => !!p.infinity && css`
    --anim-duration: infinite;
  `}
  
  position: absolute;
  top: calc(50% - calc(var(--size-misc) * 3));
  left: calc(50% - calc(var(--size-misc) * 3));
  width: var(--size);
  height: var(--size);
  background: #7f8c8d;
  border: var(--size-misc) solid #fff;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 var(--size-misc) black;
  animation: ${blinkKeyframe} .5s alternate var(--anim-duration);
`

export const TLoading = {
  Pokeball,
  PokeballButton
}

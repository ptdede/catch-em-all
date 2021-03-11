import { HTMLAttributes } from 'react'
import Image from 'next/image'
import { AppWrapperElement } from './AppWrapper.styled'

type AppWrapperProps = {
} & HTMLAttributes<HTMLDivElement>

export const AppWrapper = ({ children }: AppWrapperProps) => {
  return(
    <AppWrapperElement.Wrapper>
      <AppWrapperElement.ImageWrapper>
        <Image
          src="/logo.png"
          alt="Pokemon Logo"
          layout="fill"
          objectFit="contain"
        />
      </AppWrapperElement.ImageWrapper>
      {children}
    </AppWrapperElement.Wrapper>
  )
}

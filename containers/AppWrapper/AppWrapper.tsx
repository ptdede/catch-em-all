import { HTMLAttributes } from 'react'
import { AppWrapperElement } from './AppWrapper.styled'

type AppWrapperProps = {
} & HTMLAttributes<HTMLDivElement>

export const AppWrapper = ({ children }: AppWrapperProps) => {
  return(
    <AppWrapperElement.Wrapper>
      <AppWrapperElement.ImageWrapper>
        <AppWrapperElement.Image
          src={require('../../public/logo.png')}
          alt="Pokemon Logo"
        />
      </AppWrapperElement.ImageWrapper>
      {children}
    </AppWrapperElement.Wrapper>
  )
}

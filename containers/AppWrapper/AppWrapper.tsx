import Link from 'next/link';
import { HTMLAttributes, useEffect, useRef } from 'react'
import { useWindowSize } from 'react-use';
import { AppWrapperElement } from './AppWrapper.styled'

type AppWrapperProps = {
} & HTMLAttributes<HTMLDivElement>

export const AppWrapper = ({ children }: AppWrapperProps) => {
  const { height } = useWindowSize();
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef) {
      wrapperRef.current.style.height = height + "px";
    }
  }, [height]);

  return(
    <AppWrapperElement.Wrapper
      ref={wrapperRef}
    >
      <AppWrapperElement.ImageWrapper>
        <Link href="/">
          <a>
            <AppWrapperElement.Image
              src={require('../../public/logo.png')}
              alt="Pokemon Logo"
            />
          </a>
        </Link>
      </AppWrapperElement.ImageWrapper>
      <AppWrapperElement.ContentWrapper>
        {children}
      </AppWrapperElement.ContentWrapper>
    </AppWrapperElement.Wrapper>
  )
}

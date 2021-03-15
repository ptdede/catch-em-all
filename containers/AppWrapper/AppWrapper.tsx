import Link from 'next/link';
import { HTMLAttributes, useEffect, useRef } from 'react'
import { useWindowSize } from 'react-use';
import { TAppWrapper } from './AppWrapper.styled'

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
    <TAppWrapper.Wrapper
      ref={wrapperRef}
    >
      <TAppWrapper.ImageWrapper>
        <Link href="/">
          <a>
            <TAppWrapper.Image
              src={require('../../public/logo.png')}
              alt="Pokemon Logo"
            />
          </a>
        </Link>
      </TAppWrapper.ImageWrapper>
      <TAppWrapper.ContentWrapper>
        {children}
      </TAppWrapper.ContentWrapper>
    </TAppWrapper.Wrapper>
  )
}

import { HTMLAttributes } from 'react'
import Image from 'next/image'

type AppWrapperProps = {
} & HTMLAttributes<HTMLDivElement>

export const AppWrapper = ({ children }: AppWrapperProps) => {
  return(
    <div>
      <Image
        src="/logo.png"
        alt="Pokemon Logo"
        width={500}
        height={500}
      />
      {children}
    </div>
  )
}

import { useState } from 'react'

export const useNavigationBarProvider = () => {
  const [hidden, setHidden] = useState(false)
  
  const hideNavigation = () => setHidden(true)

  const unhideNavigation = () => setHidden(false)

  return {
    hidden,
    hideNavigation,
    unhideNavigation
  }
}
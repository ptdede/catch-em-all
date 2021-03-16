import { useState } from "react";

export const useNavigationBarProvider = () => {
  const [hidden, setHidden] = useState(false);

  const hideNavigation = (isHide: boolean) => setHidden(isHide);

  return {
    hidden,
    hideNavigation,
  };
};

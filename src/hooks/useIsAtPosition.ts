import { useState, useEffect } from "react";

const useIsAtPosition = (wantedPosition: number): boolean => {
  const [isAtPosition, setIsAtPosition] = useState(
    window.scrollY === wantedPosition
  );

  // Fixed permanent rerendering of Navbar component ( thanks to Co Pilot ;) )
  const scrollHandler = () => {
    if (window.scrollY !== wantedPosition) {
      setIsAtPosition(false);
      return;
    }
    setIsAtPosition(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return isAtPosition;
};

export default useIsAtPosition;

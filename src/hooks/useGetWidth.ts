import { useState, useEffect } from "react";


const useGetWidth = (wantedWidth: number): boolean => {
  const [hasWidth, setHasWidth] = useState(window.innerWidth <= wantedWidth);

  const resizeHandler = () => {
    if (window.innerWidth >= wantedWidth) {
      setHasWidth(false);
      return;
    }
    setHasWidth(true);
  };
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [window.innerWidth]);

  return hasWidth;
};

export default useGetWidth;

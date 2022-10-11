import { useState, useEffect } from "react";

const useAnimation = (
  duration: number
): {
  isMounted: boolean;
  isAnimating: boolean;
} => {
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const mountedTiemout = setTimeout(() => {
      setIsMounted(true);
    }, 1);

    const animatingTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, duration);

    return () => {
      clearTimeout(mountedTiemout);
      clearTimeout(animatingTimeout);
    };
  }, []);

  return { isMounted, isAnimating };
};

export default useAnimation;

import { useEffect, useMemo, useState } from "react";

const useIsInView = (ref: React.RefObject<HTMLElement>): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    if (ref.current != null) {
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [ref, observer]);

  return isIntersecting;
};

export default useIsInView;

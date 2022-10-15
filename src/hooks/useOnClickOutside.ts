import { useEffect } from "react";

//https://usehooks.com/useOnClickOutside/ (modified)
const useOnClickOutside = (
  refArr: React.RefObject<HTMLDivElement | null>[],
  handler: () => void
) => {
  useEffect(
    () => {
      const listener = (event: Event) => {
        // Do nothing if clicking ref's element or descendent elements
        for (const ref of refArr) {
          if (
            !ref.current ||
            ref.current.contains(event.target as HTMLElement)
          ) {
            return;
          }
        }
        handler();
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [refArr, handler]
  );
};

export default useOnClickOutside;

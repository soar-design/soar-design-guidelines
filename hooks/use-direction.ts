import { useEffect, useRef, useState } from "react";

export function useDirection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const checkDirection = () => {
      if (ref.current) {
        const dir = ref.current.closest("[dir]")?.getAttribute("dir");
        setIsRTL(dir === "rtl");
      }
    };

    checkDirection();
    const observer = new MutationObserver(checkDirection);
    if (ref.current) {
      const parent = ref.current.parentElement;
      if (parent) {
        observer.observe(parent, {
          attributes: true,
          attributeFilter: ["dir"],
          subtree: true,
        });
      }
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isRTL };
}

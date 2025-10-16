import { useEffect, useState } from "react";

export const useIsMd = () => {
  const [isMd, setIsMd] = useState(window.innerWidth >= 1080);

  useEffect(() => {
    const handler = () => setIsMd(window.innerWidth >= 1080);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return isMd;
};

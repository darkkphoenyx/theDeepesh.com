import { useEffect, useState } from "react";

export const useIsMid = () => {
  const [isMid, setIsMid] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handler = () => setIsMid(window.innerWidth >= 1024);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return isMid;
};

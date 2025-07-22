import { useEffect, useState } from "react";
import gsap from "gsap";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {};
  }, []);

  useEffect(() => {
    gsap.to("#cursor", {
      x: mousePosition.x,
      y: mousePosition.y,
      duration: 1,
      ease: "back.out",
    });
  }, [mousePosition]);

  return (
    <div
      id="cursor"
      className="hidden md:block w-5 h-5 bg-primary rounded-full fixed pointer-events-none z-50 shadow-[0px_0px_20px_10px_rgba(255,107,0,0.5)]"
    ></div>
  );
};

export default Cursor;

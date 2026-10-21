import { useEffect, useRef } from "react";

const useFloatingImage = () => {
  const imageRef = useRef(null);

  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    let frame;

    const animate = () => {
      const time = Date.now() * 0.001;

      // плавное движение вверх-вниз
      const floatingY = Math.sin(time) * 10;

      imageRef.current.style.transform = `
        translate(${mouseX.current}px, ${mouseY.current + floatingY}px)
        scale(1.05)
      `;

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    mouseX.current = -(x - centerX) / 8;
    mouseY.current = -(y - centerY) / 8;
  };

  const handleMouseLeave = () => {
    mouseX.current = 0;
    mouseY.current = 0;
  };

  return { imageRef, handleMouseMove, handleMouseLeave };
};

export default useFloatingImage;

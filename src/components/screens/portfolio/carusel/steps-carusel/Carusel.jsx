// src/components/pictures/carusel/Carusel.jsx
import "./Carusel.css";
import useCarusel from "@/hooks/useCarusel";

const Carusel = () => {
  const { caruselRef, setIsHovered } = useCarusel({ direction: "left" });

  return (
    <div
      ref={caruselRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="gallery-title">Carusel</p>
    </div>
  );
};

export default Carusel;

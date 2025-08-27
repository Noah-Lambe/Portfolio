import { useState, useEffect, useRef } from "react";

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const Magnet = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 1.5, // multiplier (>=1 makes it stronger)
  maxTranslate = 40, // px cap for movement
  minTranslateY = -10, // block upward motion (negative Y). Set < 0 to allow slight lift.
  scaleOnActive = 0.06, // 6% zoom when active
  activeTransition = "transform 0.25s ease-out",
  inactiveTransition = "transform 0.45s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);

  useEffect(() => {
    if (disabled) {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
      return;
    }

    let raf = 0;
    let pending = null;

    const handleMouseMove = (e) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } =
        magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const radiusX = width / 2 + padding;
      const radiusY = height / 2 + padding;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const within = Math.abs(dx) < radiusX && Math.abs(dy) < radiusY;
      setIsActive(within);

      const nx = clamp(dx / radiusX, -1, 1); // normalized -1..1
      const ny = clamp(dy / radiusY, -1, 1);

      // Clamp both axes; Y is prevented from going above origin by minTranslateY (default 0)
      const target = within
        ? {
            x: clamp(
              nx * maxTranslate * magnetStrength,
              -maxTranslate,
              maxTranslate
            ),
            y: clamp(
              ny * maxTranslate * magnetStrength,
              minTranslateY,
              maxTranslate
            ),
          }
        : { x: 0, y: 0 };

      // rAF to keep it smooth
      pending = target;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          setPosition(pending);
          raf = 0;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [padding, disabled, magnetStrength, maxTranslate, minTranslateY]);

  const transition = isActive ? activeTransition : inactiveTransition;
  const scale = isActive ? 1 + scaleOnActive : 1;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
          transition,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;

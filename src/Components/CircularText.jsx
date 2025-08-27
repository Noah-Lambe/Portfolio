import { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "motion/react";
import "../Styles/CircularText.css";

const rotTween = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: "linear",
  duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const makeTransition = (duration, from) => ({
  rotate: rotTween(duration, from),
  scale: { type: "spring", damping: 20, stiffness: 300 },
});

const CircularText = ({
  text,
  spinDuration = 20,
  onHover = "speedUp", // "speedUp" | "slowDown" | "pause" | "goBonkers" | falsy
  className = "",
  radius = 90, // px from center to text path
  size, // optional box size; defaults to radius*2 + buffer
  startAngle = -90, // where text starts (deg). -90 = top center
  center = null, // JSX in the middle (e.g., <img .../>)
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);
  const box = size ?? radius * 2 + 20;

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: makeTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    if (!onHover) return;
    const start = rotation.get();

    let t = makeTransition(spinDuration, start);
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        t = makeTransition(spinDuration * 2, start);
        break;
      case "speedUp":
        t = makeTransition(spinDuration / 4, start);
        break;
      case "pause":
        t = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        };
        break;
      case "goBonkers":
        t = makeTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        break;
    }

    controls.start({ rotate: start + 360, scale: scaleVal, transition: t });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: makeTransition(spinDuration, start),
    });
  };

  return (
    <div
      className={`circular-text ${className}`}
      style={{ width: box, height: box, position: "relative" }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {/* spinning ring of letters */}
      <motion.div
        className="circular-text__ring"
        style={{ rotate: rotation }}
        initial={{ rotate: 0 }}
        animate={controls}
      >
        {letters.map((letter, i) => {
          const angle = startAngle + (i / letters.length) * 360; // e.g., startAngle = -90 for top
          // rotate to angle → push out to radius → twist 90° so glyph sits tangent
          const transform = `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(90deg)`;

          return (
            <span
              key={i}
              className="circular-text__char"
              style={{ transform, WebkitTransform: transform }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>

      {/* static center content */}
      {center && <div className="circular-text__center">{center}</div>}
    </div>
  );
};

export default CircularText;

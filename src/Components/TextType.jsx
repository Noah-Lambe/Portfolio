"use client";

import {
  useEffect,
  useRef,
  useState,
  createElement,
  useMemo,
  useCallback,
} from "react";
import { gsap } from "gsap";
import "../Styles/Home.css";

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30, // kept for compatibility
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false); // not used in stitched mode
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const [completedSegments, setCompletedSegments] = useState([]); // [{ text, color }]

  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  // guard to avoid double-commit (e.g., React Strict Mode)
  const committedRef = useRef(-1);

  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text]
  );

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return "#ffffff";
    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout;
    const raw = textArray[currentTextIndex] ?? "";
    const currentText = reverseMode ? raw.split("").reverse().join("") : raw;

    const executeTypingAnimation = () => {
      if (currentCharIndex < currentText.length) {
        // keep typing current segment
        timeout = setTimeout(
          () => {
            setDisplayedText((prev) => prev + currentText[currentCharIndex]);
            setCurrentCharIndex((prev) => prev + 1);
          },
          variableSpeed ? getRandomSpeed() : typingSpeed
        );
      } else {
        // segment finished --------------------------------------------

        const isLast = currentTextIndex === textArray.length - 1;

        // commit exactly once per segment
        if (displayedText !== "" && committedRef.current !== currentTextIndex) {
          setCompletedSegments((prev) => [
            ...prev,
            { text: displayedText, color: getCurrentTextColor() },
          ]);
          committedRef.current = currentTextIndex;
        }

        // clear immediately to avoid duplicate rendering of the last segment
        if (displayedText !== "") {
          setDisplayedText("");
        }

        if (onSentenceComplete) {
          onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
        }

        // Only pause at the very end; otherwise continue immediately
        if (isLast) {
          timeout = setTimeout(() => {
            if (loop) {
              // restart from the beginning
              setCompletedSegments([]);
              setCurrentTextIndex(0);
              setCurrentCharIndex(0);
              committedRef.current = -1;
            } else {
              // stop gracefully
              // nothing else to do
            }
          }, pauseDuration);
        } else {
          // move to next segment without pause and without deleting previous content
          setCurrentTextIndex((i) => i + 1);
          setCurrentCharIndex(0);
          committedRef.current = -1; // allow the next segment to commit
        }
      }
    };

    if (currentCharIndex === 0 && displayedText === "") {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentCharIndex,
    displayedText,
    typingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    currentCharIndex < (textArray[currentTextIndex] || "").length;

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `text-type ${className}`,
      ...props,
    },
    <span className="text-type__content">
      {completedSegments.map((seg, i) => (
        <span key={i} style={{ color: seg.color }}>
          {seg.text}
        </span>
      ))}
      <span style={{ color: getCurrentTextColor() }}>{displayedText}</span>
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={`text-type__cursor ${cursorClassName} ${
          shouldHideCursor ? "text-type__cursor--hidden" : ""
        }`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;

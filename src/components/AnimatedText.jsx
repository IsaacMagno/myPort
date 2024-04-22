import { useEffect, useRef } from "react";

const AnimatedText = ({ children }) => {
  const textRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-inViewport");
        } else {
          entry.target.classList.remove("is-inViewport");
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(textRef.current);

    return () => observer.disconnect();
  }, [textRef]);

  return (
    <span ref={textRef} className="typed-out">
      {children}
    </span>
  );
};

export default AnimatedText;

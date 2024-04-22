import React, { useRef, useMemo, useEffect } from "react";
import "../input.css";
import AnimatedText from "./AnimatedText";

const Home = () => {
  const targetRef = useRef(null);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-inViewport");
      } else {
        targetRef.current.pause();
        entry.target.classList.remove("is-inViewport");
      }
    });
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  return (
    <div className="bg-gradient-to-r from-yellow-300 to-blue-300 min-h-screen flex items-center justify-center">
      <div className="">
        <h1
          ref={targetRef}
          className="text-lg md:text-2xl 2xl:text-5xl typed-out font-bold text-gray-700"
        >
          Bem vindo!
        </h1>
        <p className="text-xl md:text-3xl 2xl:text-6xl font-bold text-gray-800">
          Me chamo Isaac, tenho 26 anos
        </p>
        <p className="text-xs 2xl:text-2xl opacity-30  text-right">
          Role para baixo
        </p>
      </div>
    </div>
  );
};

export default Home;

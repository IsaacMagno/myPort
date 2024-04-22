import React, { useRef, useMemo, useEffect } from "react";

const Dronelivery = () => {
  const targetRef = useRef(null);

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        targetRef.current.play();
      } else {
        targetRef.current.pause();
        targetRef.current.currentTime = 0;
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
    <div className="min-h-screen grid bg-black md:grid-cols-3 items-center">
      <div className="flex flex-col justify-around min-h-full md:min-h-fit md:justify-between md:gap-y-6 md:mx-3 xl:gap-y-10 xl:mx-5 2xl:gap-y-24 2xl:mx-5">
        <p className="mx-4 text-gray-300 font-medium font-sans opacity-90 text-sm md:font-normal lg:font-medium xl:text-base  2xl:text-3xl">
          Dronelivery é um aplicativo de entregas com drones, que desenvolvi
          durante a aceleração Java na Trybe.
        </p>
        <p className="mx-4 text-gray-300 font-medium font-sans opacity-90 lg:text-right text-sm lg:font-medium xl:text-base  2xl:text-3xl">
          API totalmente construída com Java 11, utilizando Quarkus e Panache e
          MySQL como banco de dados.
        </p>
        <p className="mx-4 text-gray-300 font-medium font-sans opacity-90 text-sm lg:font-medium xl:text-base  2xl:text-3xl">
          O Front-End foi construído utilizando React e estilizado com Tailwind
          CSS, pensado como uma Single-page apenas para apresentação.
        </p>
        <a
          className="mx-10 rounded text-gray-300 font-medium font-sans opacity-90 text-sm text-center lg:font-medium xl:text-base 2xl:text-3xl border border-green-500 cursor-pointer hover:bg-green-700"
          href="https://github.com/IsaacMagno/Dronelivery"
          target="_blank"
          rel="noreferrer noopener"
        >
          Dronelivery
        </a>
      </div>
      <div
        className="mx-1 md:mx-0 md:col-span-2"
        style={{
          width: "100%",
          height: "0px",
          position: "relative",
          paddingBottom: "56.250%",
        }}
      >
        <video ref={targetRef} src="videos/dronelivery.mp4" muted loop />
      </div>
    </div>
  );
};

export default Dronelivery;

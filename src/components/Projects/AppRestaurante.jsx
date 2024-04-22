import React, { useRef, useMemo, useEffect, useState } from "react";

const AppRestaurante = () => {
  const targetRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const style = {
    width: width < 768 ? "53%" : width >= 2560 ? "100%" : "60%",
    height: "0px",
    position: "relative",
    paddingBottom: width < 768 ? "175%" : width >= 2560 ? "100%" : "120%",
  };

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
    <div className="min-h-screen grid grid-ro md:grid-cols-5 bg-gradient-to-l from-orange-500 via-orange-300 to-orange-400 items-center">
      <div className="col-span-2 lg:col-span-3 flex flex-col justify-around min-h-full mt-10 md:mt-0 md:mb-0 md:min-h-fit md:justify-between md:gap-y-6 md:mx-3 xl:gap-y-10 xl:mx-5 2xl:gap-y-24 2xl:mx-5">
        <p className="mx-2 text-gray-800 font-medium font-sans opacity-90 text-center text-base 2xl:text-3xl ">
          Desenvolvido em React Native e utilizando MySQL como banco de dados,
          oferece uma experiência mais rápida e eficiente para clientes e
          funcionários.
        </p>
        <p className="mx-2 text-gray-800 font-medium font-sans opacity-90  text-center text-base 2xl:text-3xl">
          O aplicativo conta com um sistema de gerenciamento de mesas eficiente,
          permitindo acesso rápido por garçons e outros colaboradores do
          estabelecimento. Além disso, inclui um gerenciador de estoque
          intuitivo, permitindo a adição ou remoção de itens do cardápio com
          facilidade.
        </p>
        <p className="mx-2 text-gray-800 font-medium font-sans opacity-90  text-center text-base 2xl:text-3xl">
          Todos os pedidos são automaticamente enviados para a cozinha e para o
          bar, garantindo um atendimento rápido e preciso. Ao fechar a conta,
          uma nota é impressa no caixa com todos os itens consumidos,
          facilitando o processo de pagamento.
        </p>
      </div>
      {/* {width < 1024 ? null : <div className="fillcol-div"></div>} */}
      <div
        className=" mx-1 mt-10 md:mx-0 md:mt-0 col-span-2 md:col-span-3 lg:col-span-2 justify-self-center "
        style={{
          ...style,
          ...(width >= 2560 ? { textAlign: "-webkit-center" } : {}),
        }}
      >
        <video
          ref={targetRef}
          src="videos/phonenew.webm"
          // src="myPort/videos/phonenew.webm"
          muted
          loop
          style={width >= 2560 ? { width: "50%", height: "auto" } : null}
        />
      </div>
    </div>
  );
};

export default AppRestaurante;

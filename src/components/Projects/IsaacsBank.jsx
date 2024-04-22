import React from "react";
import Carousel from "../Carousel";

const IsaacsBank = () => {
  return (
    <div className="min-h-screen bg-gradient-to-l from-blue-900 via-blue-900 to-black grid md:grid-cols-3 items-center">
      <div className="md:col-span-2">
        <Carousel images={"isaacs-bank"} />
      </div>
      <div className="flex flex-col justify-around min-h-full md:min-h-fit md:justify-between md:gap-y-6 md:mx-3 xl:gap-y-10 xl:mx-5 2xl:gap-y-24 2xl:mx-5">
        <p className="mx-2 text-gray-300 font-medium font-sans opacity-90 text-sm md:font-normal lg:font-medium xl:text-base  2xl:text-3xl text-center">
          Isaac’s Bank é um aplicativo para gestão de finanças pessoais. Nele é
          possível registrar os saques, depósitos, contas e despesas futuras.
        </p>
        <p className="mx-2 text-gray-300 font-medium font-sans opacity-90 text-sm lg:font-medium xl:text-base  2xl:text-3xl text-center">
          Utilizando React com Bootstrap e CSS para o desenvolvimento do
          Front-End, dinamicamente o saldo é atualizado de acordo com o banco de
          dados em MySQL, utilizando a API que foi desenvolvida utilizando Java
          e Quarkus.
        </p>
        <p className="mx-2 text-gray-300 font-medium font-sans opacity-90 text-sm lg:font-medium xl:text-base  2xl:text-3xl text-center">
          O aplicativo ainda não conta com sistema de autenticação e por isso
          não está disponível online. Porém, o repositório se encontra{" "}
          <a
            href="https://github.com/IsaacMagno/IsaacsBank"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-400"
          >
            aqui
          </a>
        </p>
      </div>
    </div>
  );
};

export default IsaacsBank;

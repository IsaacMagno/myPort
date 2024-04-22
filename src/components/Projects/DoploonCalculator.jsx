import React from "react";
import Carousel from "../Carousel";

const DoploonCalculator = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-3 bg-gradient-to-r from-emerald-700 to-lime-600 items-center">
      <div className="flex flex-col justify-around min-h-full md:min-h-fit md:justify-between md:gap-y-6 md:mx-3 xl:gap-y-10 xl:mx-5 2xl:gap-y-24 2xl:mx-5">
        <p className="mx-2 text-gray-100 font-medium font-sans opacity-90 text-center text-sm lg:font-medium xl:text-base lg:text-right 2xl:text-3xl">
          Doploon Calculator é um aplicativo desenvolvido para realizar calculos
          de otimização na escolha de pergaminhos com base no preço
        </p>
        <p className="mx-2 text-gray-100 font-medium font-sans opacity-90 text-center text-sm lg:font-medium xl:text-base  2xl:text-3xl ">
          Ele utiliza um algoritmo de knapsack feito em python para encontrar a
          combinação ótima para a obtenção do maior lucro para o jogador
        </p>

        <p className="text-gray-100 font-medium font-sans opacity-90 text-center text-sm mx-2 lg:font-medium xl:text-base lg:text-right 2xl:text-3xl">
          O aplicativo está disponivel nesse{" "}
          <a
            className="text-lime-500"
            href="https://doplooncalculator.onrender.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            link
          </a>
        </p>
      </div>
      <div className="md:col-span-2">
        <Carousel images={"doplooncalculator"} />
      </div>
    </div>
  );
};

export default DoploonCalculator;

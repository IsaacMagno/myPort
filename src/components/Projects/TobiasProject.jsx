import React from "react";
import Carousel from "../Carousel";

const TobiasProject = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-3 bg-gradient-to-r from-gray-800 to-gray-800 items-center">
      <div className="md:col-span-2">
        <Carousel images={"tobias"} />
      </div>
      <div className="flex flex-col justify-around min-h-full md:min-h-fit md:justify-between md:gap-y-6 md:mx-3 xl:gap-y-10 xl:mx-5 2xl:gap-y-24 2xl:mx-5">
        <p className="mx-2 text-gray-300 font-medium font-sans opacity-90 text-center text-sm md:font-normal lg:font-medium xl:text-base lg:text-right 2xl:text-3xl">
          O projeto Tobias é um aplicativo utilizado para ter dados e métricas
          de autodesenvolvimento, em um estilo RPG
        </p>
        <p className="mx-2 text-gray-300 font-medium font-sans opacity-90 text-center text-sm lg:font-medium xl:text-base  2xl:text-3xl ">
          Com um banco de dados em MySQL, e a API construida em NodeJS, todos os
          dados são armazenados e requisitados dinamicamente no front-end, que
          foi construido principalmente utilizando NextJS, e estilizado com
          TailwindCSS
        </p>

        <p className="text-gray-300 font-medium font-sans opacity-90 text-center text-sm mx-2 lg:font-medium xl:text-base lg:text-right 2xl:text-3xl">
          O aplicativo está online e você pode acessar o repositório clicando{" "}
          <a
            className="text-gray-500"
            href="https://github.com/IsaacMagno/TobiasProject"
            target="_blank"
            rel="noreferrer noopener"
          >
            aqui
          </a>
        </p>
      </div>
    </div>
  );
};

export default TobiasProject;

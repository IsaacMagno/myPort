import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

const PageThree = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-red-300 min-h-screen flex items-center justify-center">
      <div>
        <p className="text-right text-xl md:text-3xl 2xl:text-6xl font-bold text-gray-800 m-2 mb-4 md:mb-4 2xl:mb-10">
          Vou te apresentar alguns projetos
        </p>
        <div className="bg-gradient-to-r from-orange-600 rounded shadow-sm shadow-black/10 p-4 ">
          <div className="flex 2xl:p-10 justify-between flex-col 2xl:gap-y-2">
            <a
              className="text-xs md:text-base 2xl:text-3xl font-light text-white hover:bg-gradient-to-r from-orange-600"
              href="https://github.com/IsaacMagno"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineGithub className="inline mr-2" />
              GitHub
            </a>
            <a
              className="text-xs md:text-base 2xl:text-3xl font-light text-white  hover:bg-gradient-to-r from-orange-600 "
              href="https://www.linkedin.com/in/isaacmagno/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineLinkedin className="inline mr-2" />
              LinkedIn
            </a>
            <a
              className="text-xs md:text-base 2xl:text-3xl font-light text-white  hover:bg-gradient-to-r from-orange-600"
              href="https://wa.me/5519997050228"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineWhatsApp className="inline mr-2" />
              WhatsApp
            </a>
            <a
              className="text-xs md:text-base 2xl:text-3xl font-light text-white  hover:bg-gradient-to-r from-orange-600"
              href="mailto:isaacmagno98@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdAlternateEmail className="inline mr-2" />
              isaacmagno98@gmail.com
            </a>
          </div>
        </div>
        <p className="text-xs 2xl:text-2xl font-thin text-black mt-10 flex justify-end ">
          continue a rolar
        </p>
      </div>
    </div>
  );
};

export default PageThree;

import React from "react";
import Contact from "../Contact";

const PageFour = () => {
  return (
    <div className='bg-gradient-to-l from-blue-900 via-blue-900 to-black min-h-screen flex flex-col items-center justify-center'>
      <div className='mx-6'>
        <p className='text-base md:text-2xl 2xl:text-4xl font-bold text-gray-300 text-center'>
          Acompanhe meu progresso diário nesse{" "}
          <a
            href='https://github.com/IsaacMagno/5000days'
            target='_blank'
            rel='noreferrer noopener'
            className='text-gray-400'
          >
            repositório
          </a>
        </p>
        <Contact show={false} direction={"row"} />
      </div>
    </div>
  );
};

export default PageFour;

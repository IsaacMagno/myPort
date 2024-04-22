import React from "react";

const PageOne = () => {
  return (
    <div className="bg-gradient-to-r from-orange-300 to-blue-300 min-h-screen flex items-center justify-center">
      <div>
        <p className="text-xl md:text-3xl 2xl:text-6xl font-bold text-gray-800">
          Sou Programador há 4 anos
        </p>
        <p className="text-xs md:text-base 2xl:text-3xl font-thin text-gray-800 2xl:mt-1">
          [ NodeJS, Python, MongoDB, MySQL
        </p>
        <p className="text-xs md:text-base 2xl:text-3xl  font-thin text-gray-800 flex justify-end">
          Javascript, React, Next, Tailwind CSS]
        </p>
      </div>
    </div>
  );
};

export default PageOne;

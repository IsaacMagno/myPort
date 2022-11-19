import React from "react";
import "../input.css";

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-300 to-blue-300 min-h-screen flex items-center justify-center'>
      <div className=''>
        <h1 className='text-2xl  md:text-4xl 2xl:text-7xl typed-out font-bold text-gray-700'>
          Salve, salve Recruiter!
        </h1>
        <p className='text-xs 2xl:text-2xl opacity-30 '>Role o mouse</p>
      </div>
    </div>
  );
};

export default Home;

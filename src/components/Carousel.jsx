import React from "react";

const Carousel = ({ images }) => {
  return (
    <div
      id={`carousel-${images}`}
      className='carousel slide carousel-fade relative'
      data-bs-ride='carousel'
    >
      <div className='carousel-inner relative w-full overflow-hidden shadow-md shadow-gray-900'>
        <div className='carousel-item active float-left w-full '>
          <img
            src={`/myPort/images/${images}/${images}-1.png`}
            className='block w-full rounded-r '
            alt=''
          />
        </div>
        <div className='carousel-item float-left w-full'>
          <img
            src={`/myPort/images/${images}/${images}-2.png`}
            className='block w-full rounded-r '
            alt=''
          />
        </div>
        <div className='carousel-item float-left w-full'>
          <img
            src={`/myPort/images/${images}/${images}-3.png`}
            className='block w-full rounded-r '
            alt=''
          />
        </div>
        <div className='carousel-item float-left w-full'>
          <img
            src={`/myPort/images/${images}/${images}-4.png`}
            className='block w-full rounded-r '
            alt=''
          />
        </div>
        <div className='carousel-item float-left w-full'>
          <img
            src={`/myPort/images/${images}/${images}-5.png`}
            className='block w-full rounded-r '
            alt=''
          />
        </div>
      </div>
      <button
        className='carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0'
        type='button'
        data-bs-target={`#carousel-${images}`}
        data-bs-slide='prev'
      >
        <span
          className='carousel-control-prev-icon inline-block bg-no-repeat'
          aria-hidden='true'
        ></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0'
        type='button'
        data-bs-target={`#carousel-${images}`}
        data-bs-slide='next'
      >
        <span
          className='carousel-control-next-icon inline-block bg-no-repeat'
          aria-hidden='true'
        ></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

export default Carousel;

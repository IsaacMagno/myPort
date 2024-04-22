import React, { useEffect, useState } from "react";
import jsonData from "../json/jsonData.json";

const Carousel = ({ images }) => {
  const [jsonImages, _setJsonImages] = useState(jsonData);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const imagesStore = [];

    for (let i = 1; i < jsonImages[images].imageCount + 1; i++) {
      imagesStore.push({ src: `/myPort/images/${images}/${images}-${i}.png` });
    }

    setLoadedImages([...loadedImages, ...imagesStore]);
  }, []);

  return (
    <div
      id={`carousel-${images}`}
      className="carousel slide carousel-fade relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden shadow-sm shadow-gray-900">
        {loadedImages ? (
          loadedImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === 0 ? "active" : ""
              } float-left w-full`}
            >
              <img src={image.src} className="block w-full rounded-r" alt="" />
            </div>
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 noSelect"
        type="button"
        data-bs-target={`#carousel-${images}`}
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 noSelect"
        type="button"
        data-bs-target={`#carousel-${images}`}
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

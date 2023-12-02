import { data } from "./Carousel";
import { useState } from "react";

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const handlePrevious = () => {
    if (imgIndex === 0) {
      setImgIndex(data.length - 1);
    } else setImgIndex(imgIndex - 1);
  };

  const handleNext = () => {
    if (imgIndex === data.length - 1) {
      setImgIndex(0);
    } else setImgIndex(imgIndex + 1);
  };

  console.log(imgIndex, "imgIndex");

  return (
    <>
      <h1>Carousel demo</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={handlePrevious}>Previous</button>
        {data.map((url, index) => (
          <img
            src={url}
            className={index === imgIndex ? "show" : "hidden"}
            alt="images"
            width="500px"
            height="450px"
            style={{ objectFit: "contain" }}
          />
        ))}

        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default Carousel;

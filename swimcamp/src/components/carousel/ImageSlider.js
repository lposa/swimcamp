import React from "react";
import { SliderData } from "./SliderData";

function ImageSlider() {
  return (
    <>
      {SliderData.map((slide, index) => {
        return <img src={slide.image} alt="sliderpicture" />;
      })}
    </>
  );
}

export default ImageSlider;

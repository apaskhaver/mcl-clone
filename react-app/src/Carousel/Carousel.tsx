import { useState } from "react";
import { RightArrow } from "./RightArrow";
import { LeftArrow } from "./LeftArrow";
import "./Carousel.css";

export const Carousel = ({
  carouselImages,
}: {
  carouselImages: {
    id: number;
    title: string;
    content: string;
  }[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === carouselImages.length ? 0 : prevIndex + 1,
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? carouselImages.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="carousel">
      <img key={currentIndex} src={carouselImages[currentIndex].content} />
      <div className="slide-director">
        <div className="left" onClick={handlePrevious}>
          <LeftArrow />
        </div>
        <div className="right" onClick={handleNext}>
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

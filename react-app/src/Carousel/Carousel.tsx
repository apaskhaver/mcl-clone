import { useCallback, useEffect, useState } from "react";
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

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === carouselImages.length ? 0 : prevIndex + 1,
    );
  }, [carouselImages.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? carouselImages.length - 1 : prevIndex - 1,
    );
  }, [carouselImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, handleNext]);

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

import React, { useEffect, useState } from "react";
import useIsMounted from "../../Hooks/useIsMounted";
import "./Carousel.css";
import { Images } from "./Images";

interface Values {
  currentTranslate: number;
}

interface TransformStyles {
  transform: string;
  transition: string;
}

const images = [Images.first, Images.second, Images.third, Images.fourth];

const styles = {
  transformStyles: {
    transform: "",
    transition: "",
  },
};

const Carousel = () => {
  const isMounted = useIsMounted();
  const [transformStyles, setTransformStyles] = useState<TransformStyles>(
    styles.transformStyles
  );
  const [current, setCurrent] = useState(0);
  const [values, setValues] = useState<Values>({
    currentTranslate: 0,
  });

  const firstSlide = () => {
    setCurrent(0);
  };
  const secondSlide = () => {
    setCurrent(1);
  };
  const thirdSlide = () => {
    setCurrent(2);
  };
  const fourthSlide = () => {
    setCurrent(3);
  };

  useEffect(() => {
    const innerContainer: any = document.querySelector(".inner");

    let isDragging = false,
      startPos = 0,
      currentTranslate = 0,
      transformValue: any = 0,
      transform: any = 0,
      lastPageX: any = 0,
      currentIndex = 0;

    const touchEnd = (event: any) => {
      if (isDragging) {
        const currentPosition = getPosition(event);
        const movedBy = currentPosition - startPos;
        const movement = checkMovement(movedBy);
        console.log("movement", movement);
        if (!isMounted()) return;
        if (movement == "nextImage") {
          setCurrent(currentIndex + 1);
        } else if (movement == "previousImage") {
          setCurrent(currentIndex - 1);
        } else {
          resetImagePosition();
        }
      }
      isDragging = false;
    };

    const checkMovement = (movedBy: any) => {
      if (movedBy <= -50 && currentIndex < images.length - 1) {
        return "nextImage";
      } else if (movedBy >= 50 && currentIndex > 0) {
        return "previousImage";
      }
    };

    const touchMove = (event: any) => {
      if (!isDragging) return;
      const currentPosition = getPosition(event);
      currentTranslate = currentPosition - startPos;
      transformValue = parseInt(transform) + currentTranslate;
      if (!isMounted()) return;
      const accessImageSwipe = checkAccessImageSwipe(currentPosition);
      if (accessImageSwipe) return;
      setValues((val) => {
        return { ...val, currentTranslate: transformValue };
      });
      lastPageX = getPosition(event);
    };

    const touchStart = (index: number, img: any) => {
      return function (event: any) {
        isDragging = true;
        startPos = getPosition(event);
        currentIndex = index;
        transform = getComputedTransformStyle();
      };
    };

    const resetImagePosition = () => {
      let cm = checkMargin(currentIndex);
      let transformStyle = {
        ...transformStyles,
        transform: `translateX(${cm})`,
        transition: "0.2s ease-out",
      };
      setTransformStyles(transformStyle);
    };

    const checkAccessImageSwipe = (currentPosition: any) => {
      if (currentPosition - lastPageX > 0) {
        // prevents going left in access for the first image

        if (transformValue > 0) {
          return true;
        }
      } else {
        // prevents going right in access for the second image

        if (Math.abs(transformValue) > innerContainer.offsetWidth * 3) {
          return true;
        }
      }
      return false;
    };

    const getComputedTransformStyle = (): string | number => {
      return window
        .getComputedStyle(innerContainer)
        .getPropertyValue("transform") !== "none"
        ? window
            .getComputedStyle(innerContainer)
            .getPropertyValue("transform")
            .split(",")[4]
        : 0;
    };

    const getPosition = (event: MouseEvent & TouchEvent) => {
      return event.type.includes("mouse")
        ? event.pageX
        : event.changedTouches[0].clientX;
    };

    const ImagesSelector = document.querySelectorAll(".images");
    ImagesSelector.forEach((firstImg, index) => {
      firstImg?.addEventListener("dragstart", (e) => {
        e.preventDefault();
      });

      firstImg?.addEventListener("touchstart", touchStart(index, firstImg));
      firstImg?.addEventListener("touchmove", touchMove);
      firstImg?.addEventListener("touchend", touchEnd);

      firstImg?.addEventListener("mousedown", touchStart(index, firstImg));
      firstImg?.addEventListener("mousemove", touchMove);
      firstImg?.addEventListener("mouseleave", touchEnd);
      firstImg?.addEventListener("mouseup", touchEnd);
    });

    return () => {
      ImagesSelector.forEach((firstImg, index) => {
        firstImg?.removeEventListener("dragstart", (e) => {
          e.preventDefault();
        });
        firstImg?.removeEventListener(
          "touchstart",
          touchStart(index, firstImg)
        );
        firstImg?.removeEventListener("touchmove", touchMove);
        firstImg?.removeEventListener("touchend", touchEnd);
        firstImg?.removeEventListener("mousedown", touchStart(index, firstImg));
        firstImg?.removeEventListener("mousemove", touchMove);
        firstImg?.removeEventListener("mouseleave", touchEnd);
        firstImg?.removeEventListener("mouseup", touchEnd);
      });
    };
  }, []);

  useEffect(() => {
    if (!isMounted()) return;
    setTransformStyles({
      ...transformStyles,
      transform: `translateX(${values.currentTranslate}px)`,
      transition: "",
    });
  }, [values.currentTranslate]);

  useEffect(() => {
    if (!isMounted()) return;
    let m = checkMargin(current);
    setTransformStyles({
      ...transformStyles,
      transform: `translateX(${m})`,
      transition: "0.2s ease-out",
    });
  }, [current]);

  useEffect(() => {
    const updateSlider = () => {
      if (!isMounted()) return;
      setCurrent((val) => {
        if (val < images.length - 1) {
          return val + 1;
        } else {
          return 0;
        }
      });
    };
    let id = setInterval(updateSlider, 3000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const checkMargin = (cases: number): string => {
    switch (cases) {
      case 1:
        return "-100%";
      case 2:
        return "-200%";
      case 3:
        return "-300%";
      default:
        return "0%";
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <div className="inner" style={transformStyles}>
          <img src={images[0]} alt="" className="images" />
          <img src={images[1]} alt="" className="images" />
          <img src={images[2]} alt="" className="images" />
          <img src={images[3]} alt="" className="images" />
        </div>
      </div>
      <div className="toggle-dots-of-slider">
        <button
          className="dots"
          onClick={firstSlide}
          style={{ backgroundColor: current === 0 ? "#444" : "" }}
        ></button>
        <button
          className="dots"
          onClick={secondSlide}
          style={{ backgroundColor: current === 1 ? "#444" : "" }}
        ></button>
        <button
          className="dots"
          onClick={thirdSlide}
          style={{ backgroundColor: current === 2 ? "#444" : "" }}
        ></button>
        <button
          className="dots"
          onClick={fourthSlide}
          style={{ backgroundColor: current === 3 ? "#444" : "" }}
        ></button>
      </div>
    </div>
  );
};

export default Carousel;

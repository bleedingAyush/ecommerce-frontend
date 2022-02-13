import React, { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "react-feather";
import "./Carousel.css";
import Images from "./Images";

interface Values {
  isDragging: boolean;
  currentTranslate: number;
  prevTranslate: number;
  animationID: number;
  currentIndex: number;
  startPos: number;
}

const images = [Images.first, Images.second, Images.third, Images.fourth];

const Carousel = () => {
  const [margining, setMargining] = useState<string>("0%");
  const [styles, setStyles] = useState({
    translateX: "",
    transform: "",
  });
  const [current, setCurrent] = useState(0);
  const [values, setValues] = useState<Values>({
    isDragging: false,
    currentTranslate: 0,
    prevTranslate: 0,
    animationID: 0,
    currentIndex: 0,
    startPos: 0,
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

  useEffect(
    () => {
      const innerContainer: any = document.querySelector(".inner");

      let isDragging = false,
        startPos = 0,
        currentTranslate = 0,
        prevTranslate = 0,
        animationID = 0,
        transformValue: any = 0,
        transform: any = 0,
        lastPageX: any = 0,
        currentIndex = 0;

      const touchEnd = (event: any) => {
        if (isDragging) {
          const currentPosition = getPosition(event);
          const movedBy = currentPosition - startPos;

          if (movedBy <= -100 && currentIndex < images.length - 1) {
            setCurrent(currentIndex + 1);
          } else if (movedBy >= 100 && currentIndex > 0) {
            setCurrent(currentIndex - 1);
          } else {
            let cm = checkMargin(currentIndex);
            setMargining(cm);
            setStyles({
              ...styles,
              translateX: cm,
              transform: "300ms ease-in-out",
            });
          }
        }
        isDragging = false;

        // setCurrent(currentIndex + 1);
      };

      const touchMove = (event: any) => {
        if (isDragging) {
          const currentPosition = getPosition(event);
          currentTranslate = currentPosition - startPos;
          transformValue = parseInt(transform) + currentTranslate;
          if (currentPosition - lastPageX > 0) {
            if (transformValue > 0) {
              return;
            }
          } else {
            if (Math.abs(transformValue) > innerContainer.offsetWidth * 3) {
              return;
            }
          }
          setValues((val) => {
            return { ...val, currentTranslate: transformValue };
          });
          lastPageX = getPosition(event);
        }
      };

      const touchStart = (index: number, img: any) => {
        return function (event: any) {
          isDragging = true;
          startPos = getPosition(event);
          currentIndex = index;
          transform =
            window
              .getComputedStyle(innerContainer)
              .getPropertyValue("transform") !== "none"
              ? window
                  .getComputedStyle(innerContainer)
                  .getPropertyValue("transform")
                  .split(",")[4]
              : 0;
        };
      };

      const getPosition = (event: MouseEvent & TouchEvent) => {
        return event.type.includes("mouse")
          ? event.pageX
          : event.touches[0].clientX;
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
          firstImg?.removeEventListener(
            "mousedown",
            touchStart(index, firstImg)
          );
          firstImg?.removeEventListener("mousemove", touchMove);
          firstImg?.removeEventListener("mouseleave", touchEnd);
          firstImg?.removeEventListener("mouseup", touchEnd);
        });
      };
    },
    [
      // values.isDragging,
      // values.currentTranslate,
      // values.prevTranslate,
      // values.startPos,
    ]
  );

  useEffect(() => {
    // console.log("values", values.currentTranslate);
    // if (values.currentTranslate < 0) return;
    // } else {
    setMargining(`${values.currentTranslate}px`);
    // }
  }, [values.currentTranslate]);

  useEffect(() => {
    let m = checkMargin(current);
    setMargining(m);
    setStyles({ ...styles, translateX: m, transform: "300ms ease-in-out" });
  }, [current]);

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
        <div id="overflow">
          <div
            className="inner"
            style={{
              transform: `translateX(${margining})`,
            }}
          >
            <img src={images[0]} alt="" className="images" />
            <img src={images[1]} alt="" className="images" />
            <img src={images[2]} alt="" className="images" />
            <img src={images[3]} alt="" className="images" />
          </div>
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

// {images.map((item, index) => {
//   return (

//   );
// })}

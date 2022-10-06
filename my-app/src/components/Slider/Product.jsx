import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./Thumb";
import { mediaByIndex } from "./Media/Media";
import "./style/Product.css";

const Product = ({ slides }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
    dragFree: true
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (

  <main className="product">
        <div className="embla__viewport" ref={mainViewportRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <img
                    className="embla__slide__img"
                    src={mediaByIndex(index)}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      <div className="embla embla--thumb">
        <div className="embla__viewport" ref={thumbViewportRef}>
          <div className="embla__container embla__container--thumb">
            {slides.map((index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={mediaByIndex(index)}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>   
      
      <div className="product-description flow">
        <p className="text-uppercase fw-700 fs-100 letter-spacing-1 Orange">
          Sneaker Company
        </p>
        <h1 className="fw-700 line-height-300 fs-800 blue">
          Fall Limited Edition Sneakers
        </h1>
        <p className="fw-400 line-height-500 fs-400 darkGrayishBlue">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="product-price">
          <div className="discounted-price flex">
            <span className="fw-700 blue fs-700">$125.00</span>
            <span className="offer fw-700 fs-400 Orange">50%</span>
          </div>
          <div className="original-price">
            <span className="fw-700 fs-400 line-height-500 text-line-through GrayishBlue">
              $250.00
            </span>
            </div>
          </div>
    </div>
  </main>
  );
};

export default Product;

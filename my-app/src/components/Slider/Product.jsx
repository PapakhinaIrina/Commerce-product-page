import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Lightbox } from "./LightBox";
import { Media } from '../Slider/Media/Media';
import { Thumb } from "./Thumb";
import { mediaByIndex } from "./Media/Media";
import plusIcon from '../Slider/icons/icon-plus.svg';
import minusIcon from '../Slider/icons/icon-minus.svg';
import "./style/Product.scss";

const Product = ({ slides, productQuantity, setProductQuantity, setCartProductQuantity,}) => {
  // const [currentProductImage, setCurrentProductImage] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
    dragFree: true
  });

  const handleAddToCart = () => {
    setCartProductQuantity((prevState) => prevState + productQuantity);
    setProductQuantity(0);
  };

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
      
    <div className="product-description">
      <p className="sneaker-company">
        Sneaker Company
      </p>
      <h1 className="title">
        Fall Limited Edition Sneakers
      </h1>
      <p className="description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they???ll withstand everything
        the weather can offer.
      </p>
      <div className="product-price">
        <div className="discounted-price">
          <span className="price">$125.00</span>
          <span className="offer">50%</span>
        </div>
        </div>
        <div className="original-price">
          <span >
            $250.00
          </span>
        </div>
    </div>

    <div className="action-wrapper">
            <div className="product-quantity">
              <img
                src={minusIcon}
                alt=""
                onClick={() =>
                  setProductQuantity((prevState) =>
                    prevState !== 0 ? prevState - 1 : 0,
                  )
                }
              />
              <span className="fw-700 fs-400 blue">{productQuantity}</span>
              <img
                src={plusIcon}
                alt=""
                onClick={() => setProductQuantity((prevState) => prevState + 1)}
              />
            </div>
            <button
              onClick={handleAddToCart}
              className="btn flex fw-700 fs-400"
            >
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#ffffff"
                  fillRule="nonzero"
                />
              </svg>
              Add to cart
            </button>
          </div>
          {lightbox && (
        <Lightbox Media={Media} setLightbox={setLightbox} />
      )}
  </main>
  );
};

export default Product;

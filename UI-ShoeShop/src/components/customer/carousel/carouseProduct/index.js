/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import "./style.css";

function CarouselProduct() {
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: "auto",
    touchRatio: 0.2,
    slideToClickedSlide: true
  };
  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);
  return (
    <div>
      <Swiper {...gallerySwiperParams}>
        <div
          className="swiper-slide"
          style={{
            backgroundImage: "url(http://lorempixel.com/600/600/nature/1)"
          }}
        ></div>
        <div
          className="swiper-slide"
          style={{
            backgroundImage: "url(http://lorempixel.com/600/600/nature/2)"
          }}
        ></div>
        <div
          className="swiper-slide"
          style={{
            backgroundImage: "url(http://lorempixel.com/600/600/nature/3)"
          }}
        ></div>
        <div
          className="swiper-slide"
          style={{
            backgroundImage: "url(http://lorempixel.com/600/600/nature/4)"
          }}
        ></div>
        <div
          className="swiper-slide"
          style={{
            backgroundImage: "url(http://lorempixel.com/600/600/nature/5)"
          }}
        ></div>
      </Swiper>
      <Swiper {...thumbnailSwiperParams}>
        <img
          className="slide-under swiper-slide "
          src="http://lorempixel.com/600/600/nature/1"
        ></img>

        <img
          className="slide-under swiper-slide "
          src="http://lorempixel.com/600/600/nature/2"
        ></img>

        <img
          className="slide-under swiper-slide "
          src="http://lorempixel.com/600/600/nature/3"
        ></img>

        <img
          className="slide-under swiper-slide "
          src="http://lorempixel.com/600/600/nature/4"
        ></img>

        <img
          className="slide-under swiper-slide "
          src="http://lorempixel.com/600/600/nature/5"
        ></img>
      </Swiper>
    </div>
  );
}

export default CarouselProduct;

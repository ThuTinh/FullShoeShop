/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import slide1 from "../../../../assets/image/slide1.jpg";
import slide2 from "../../../../assets/image/slide2.jpg";
import slide3 from "../../../../assets/image/slide3.jpg";
import slide4 from "../../../../assets/image/slide4.jpg";
import slide5 from "../../../../assets/image/slide5.jpg";
import "./style.css";
import { Slide } from "@material-ui/core";

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
            backgroundImage: `url(${slide1})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div
          className="swiper-slide"
          style={{
            backgroundImage: `url(${slide2})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div
          className="swiper-slide"
          style={{
            backgroundImage: `url(${slide3})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div
          className="swiper-slide"
          style={{
            backgroundImage: `url(${slide4})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div
          className="swiper-slide"
          style={{
            backgroundImage: `url(${slide5})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      </Swiper>
      <Swiper {...thumbnailSwiperParams} style = {{marginTop: '-80px'}}>
        <img
          className="slide-under swiper-slide "
          src={slide1}
        ></img>

        <img
          className="slide-under swiper-slide "
          src={slide2}
        ></img>

        <img
          className="slide-under swiper-slide "
          src={slide3}
        ></img>

        <img
          className="slide-under swiper-slide "
          src={slide4}
        ></img>

        <img
          className="slide-under swiper-slide "
          src={slide5}
        ></img>
      </Swiper>
    </div>
  );
}

export default CarouselProduct;

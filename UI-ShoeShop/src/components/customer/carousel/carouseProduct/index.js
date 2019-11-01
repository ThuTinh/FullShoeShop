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
        <div className="swiper-slide">
          <img style={{ width: "100%", height: "100%" }} src={slide1}></img>
        </div>
        <div className="swiper-slide">
          <img style={{ width: "100%", height: "100%" }} src={slide2}></img>
        </div>
        <div className="swiper-slide">
          <img style={{ width: "100%", height: "100%" }} src={slide3}></img>
        </div>
        <div className="swiper-slide">
          <img style={{ width: "100%", height: "100%" }} src={slide4}></img>
        </div>
        <div className="swiper-slide">
          <img style={{ width: "100%", height: "100%" }} src={slide5}></img>
        </div>
      </Swiper>
      <Swiper {...thumbnailSwiperParams}>
        <img className="slide-under swiper-slide " src={slide1}></img>

        <img className="slide-under swiper-slide " src={slide2}></img>

        <img className="slide-under swiper-slide " src={slide3}></img>

        <img className="slide-under swiper-slide " src={slide4}></img>

        <img className="slide-under swiper-slide " src={slide5}></img>
      </Swiper>
    </div>
  );
}

export default CarouselProduct;

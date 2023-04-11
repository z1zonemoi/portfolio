import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: true,
    initialSlide: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
  };

  return (
    <StyledSlide {...settings}>
      {images.map((image) => {
        const { alt, src } = image;
        return (
          <div className="imageContainer" key={alt}>
            <img
              className="imageStyle"
              alt={alt}
              src={process.env.PUBLIC_URL + src}
            />
          </div>
        );
      })}
    </StyledSlide>
  );
};

const StyledSlide = styled(Slider)`
  width: 20rem;
  height: 12rem;

  .slick-slider {
    z-index: -1;
  }
  ul {
    width: 20rem;
    position: absolute;
    bottom: -20%;
    margin-bottom: 1rem;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 15px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: "•";
    text-align: center;
    opacity: 0.35;
    color: #2b2b2b;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #655dbb;
  }
  .slick-list {
    width: 20rem;
    height: 15rem;
    overflow: hidden;
  }
  .slick-slide img {
    margin: 0px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 20px;
    line-height: 1;
    opacity: 0.75;
    color: #655dbb;
    -moz-osx-font-smoothing: grayscale;
  }

  .imageContainer {
    width: 20rem;
  }
  .imageStyle {
    width: 20rem;
    border-radius: 0.2rem;
  }

  @media (min-width: 650px) {
    width: 27rem;
    height: 15rem;

    ul {
      width: 27rem;
      bottom: -10%;
      margin-bottom: 0rem;
    }

    .slick-list {
      width: 27rem;
    }

    .imageContainer {
      width: 27rem;
    }

    .imageStyle {
      width: 27rem;
    }
  }
`;

export default Carousel;

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
          <ImageContainer key={alt}>
            <ImgStyle alt={alt} src={process.env.PUBLIC_URL + src} />
          </ImageContainer>
        );
      })}
    </StyledSlide>
  );
};

const StyledSlide = styled(Slider)`
  width: 27rem;
  height: 15rem;
  .slick-slider {
    z-index: -1;
  }
  ul {
    width: 27rem;
    position: absolute;
    bottom: -10%;
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
    width: 27rem;
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
`;

const ImageContainer = styled.div`
  width: 27rem;
`;
const ImgStyle = styled.img`
  width: 27rem;
  border-radius: 0.2rem;
`;

export default Carousel;

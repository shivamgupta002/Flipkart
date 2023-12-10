import React from "react";
import { bannerData } from "../../constants/data";
import { styled } from "@mui/material";

// --------- Use Carousel -------------
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// -----------------------------------------------------------

const Image = styled("img")({
  width: "100%",
  height: 280,
});

// ###################  Main Component ################

const Banner = () => {
  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        slidesToSlide={1}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {bannerData.map((data) => {
          return <Image src={data.url} alt="banner" />;
        })}
      </Carousel>
      ;
    </>
  );
};

export default Banner;

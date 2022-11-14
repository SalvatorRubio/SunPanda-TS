import React from "react";
import Slider from "react-slick";

type DiscountTypes = {
  discounts: string[];
};

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SliderDiscount: React.FC<DiscountTypes> = ({ discounts }) => {
  return (
    <div className="mx-5">
      <Slider {...settings}>
        {discounts.map((item: string) => {
          return (
            <div key={item} className="px-3 my-3">
              <img className="w-100 rounded-3" src={item} alt={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderDiscount;

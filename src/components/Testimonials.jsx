import React from "react";
import user from "./Reply/user-icon.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const data = [
    {
      Username: "User1",
      Body: "I think the good bank scheme is really great!",
      Rate: 4.2,
    },
    {
      Username: "User2",
      Body: "I'm not very impressed with the good bank scheme.",
      Rate: 3.7,
    },
    {
      Username: "User3",
      Body: "The good bank scheme is excellent, and I rate it 5 out of 5!",
      Rate: 5.0,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1280 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1023 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  const content = data.map((test) => {
    return (
      <div className="flex gap-4 items-center justify-center text-md font-semibold p-4 border border-gray-400 max-h-48 min-h-[120px] h-[150px]">
        <div>
          <img src={user} alt="user" width={50} height={50} />
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <div className="text-lg font-bold">{test.Username}</div>
          <div className="">{test.Body}</div>
          <div>{test.Rate}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="m-4 flex flex-col">
      <div className="text-3xl my-6 font-semibold">GoalSetter</div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        arrows={false}
        shouldResetAutoplay={true}
        rewind={true}
        rewindWithAnimation={true}
      >
        <div className="">{content[0]}</div>
        <div className="">{content[1]}</div>
        <div className="">{content[2]}</div>
      </Carousel>
    </div>
  );
};

export default Testimonials;

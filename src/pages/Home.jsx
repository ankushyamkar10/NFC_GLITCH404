import Button from "@mui/material/Button";
import React from "react";
import Replys from "../components/Reply/replys";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <div className="vidintro">
      <div className=" m-0">
        <iframe
          className="w-[100vw] h-[18rem]"
          src="https://www.youtube.com/embed/DsKiW4ykDW0?si=vqUhSqFns9r9_d0C"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullscreen
        ></iframe>
      </div>
      <div className="btngrp flex flex-row justify-center my-6 mt-10">
        <Button variant="outlined" sx={{ mx: 3 }}>
          View Details
        </Button>
        <Button variant="outlined" sx={{ mx: 3 }}>
          Get Started
        </Button>
      </div>
      <div className="partner flex flex-col text-center justify-center">
        <h1 className="text-[1.5rem] my-1 mx-3.5 ">Our Partners</h1>
        <p className="text-[0.8rem]">Support us via this channel</p>
      </div>
      <Partners />
      <Replys currentUserId={1} />
      <Testimonials />
    </div>
  );
};

export default Home;

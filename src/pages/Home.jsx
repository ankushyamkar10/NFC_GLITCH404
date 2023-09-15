import Button from "@mui/material/Button";
import React from "react";
import Replys from "../components/Reply/replys";

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Home = () => {
  return (
    <div className="vidintro">
      <div className="container m-0">
        <iframe
          className="w-[100vw] h-[18rem]"
          src="https://www.youtube.com/embed/DsKiW4ykDW0?si=vqUhSqFns9r9_d0C"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="btngrp flex flex-row justify-center my-6 mt-10">
        <Button variant="outlined" sx={{ mx: 3 }}>
          abc
        </Button>
        <Button variant="outlined" sx={{ mx: 3 }}>
          Get Started
        </Button>
      </div>
      <Replys currentUserId={1} />
    </div>
  );
};

export default Home;

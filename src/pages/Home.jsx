import AppBar from '@mui/material/AppBar'; import React from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";


// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];	


const Home = () => {

  return (
    <div className="vidintro">
      <div className="container m-0">
        <iframe className="w-[100vw] h-auto" src="https://www.youtube.com/embed/DsKiW4ykDW0?si=vqUhSqFns9r9_d0C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="btngrp flex flex-row justify-center my-6 mt-10">
        <Button variant="outlined" sx={{ mx: 3 }}>abc</Button>
        <Button variant="outlined" sx={{ mx: 3 }}>Get Started</Button>
      </div>
    </div>
  );
}


export default Home;

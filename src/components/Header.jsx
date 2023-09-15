import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { getCookie } from "../utils/cookies";

const Header = () => {
  const pages = ["Home", "Services", "FAQs"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorElServicesMenu, setAnchorElServicesMenu] = useState(null);

  // Event handler to open the "Services" dropdown
  const handleOpenServicesMenu = (event) => {
    setAnchorElServicesMenu(event.currentTarget);
  };

  // Event handler to close the "Services" dropdown
  const handleCloseServicesMenu = () => {
    setAnchorElServicesMenu(null);
  };

  return (
    <AppBar position="static">
      <Container maxwidth="xl">
        <Toolbar disableGutters>
          <AccountBalanceIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 3,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Aapli Bank
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Menu
                id="services-menu"
                anchorEl={anchorElServicesMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElServicesMenu)}
                onClose={handleCloseServicesMenu}
              >
                <MenuItem
                  onClick={() => {
                    handleCloseServicesMenu();
                    window.location.href = "/management";
                  }}
                >
                  Budget Management
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseServicesMenu();
                    window.location.href = "/goalsetter";
                  }}
                >
                  Goal Setter
                </MenuItem>

                {/* Add more services as needed */}
              </Menu>
              <MenuItem>Home</MenuItem>

              <MenuItem>
                <Box
                  sx={{
                    position: "relative", // To position the dropdown
                  }}
                >
                  <Button
                    aria-controls="services-menu"
                    aria-haspopup="true"
                    onClick={handleOpenServicesMenu}
                    color="inherit"
                  >
                    Services
                  </Button>
                </Box>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>FAQs</MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{ color: "success.main" }}
              >
                Open an Account
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Aapli Bank
          </Typography>
          <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: { xs: "none", md: "flex" },
              }}
            >
              Home
            </Button>
            <Button
              aria-controls="services-menu"
              aria-haspopup="true"
              onClick={handleOpenServicesMenu}
              color="inherit"
              sx={{
                my: 2,
                color: "white",
                display: { xs: "none", md: "flex" },
              }}
            >
              Services
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: { xs: "none", md: "flex" },
              }}
            >
              FAQs
            </Button>

            <Button
              variant="outlined"
              sx={{ color: "white", ml: "auto", display: { xs: "block" } }}
              onClick={() => (window.location.href = "/login")}
            >
              {!getCookie("user") ? "LOGIN" : getCookie("user").name}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

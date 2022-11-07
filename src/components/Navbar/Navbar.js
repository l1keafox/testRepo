import * as React from "react";
import { HashLink as Link } from "react-router-hash-link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import "./navbar.css";

const pages = ["About", "FAQ", "Testimonials", "Contact"];
console.log(pages);

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      className="navbar"
      style={{
        background: "#770000",
        height: "7rem",
        justifyContent: "space-between",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FitnessCenterIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              fontSize: "2rem",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "4rem",
              textShadow: "3px 3px 8px black",
            }}
          >
            ATG
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="navbar button"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <Link smooth to="/">
                <MenuIcon />
              </Link>
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
              <Link
                smooth
                to="#about"
                style={{
                  textDecoration: "none",
                  color: "white",
                  margin: "0px",
                }}
                key={pages[0]}
                onClick={handleCloseNavMenu}
                className="navlinks"
              >
                {pages[0]}
              </Link>
              <Link
                smooth
                to="#FAQ"
                style={{ textDecoration: "none", color: "white" }}
                key={pages[1]}
                onClick={handleCloseNavMenu}
                className="navlinks"
              >
                {pages[1]}
              </Link>
              <Link
                smooth
                to="#blog"
                style={{ textDecoration: "none", color: "white" }}
                key={pages[2]}
                onClick={handleCloseNavMenu}
                className="navlinks"
              >
                {pages[2]}
              </Link>
              <Link
                smooth
                to="#contact"
                style={{ textDecoration: "none", color: "white" }}
                key={pages[3]}
                onClick={handleCloseNavMenu}
                className="navlinks"
              >
                {pages[3]}
              </Link>
            </Menu>
          </Box>
          <FitnessCenterIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ATG
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link smooth to="#about">
              <Button>
                <Typography textAlign="center">{pages[0]}</Typography>
              </Button>
            </Link>
            <Link smooth to="#FAQ">
              <Button>
                <Typography textAlign="center">{pages[1]}</Typography>
              </Button>
            </Link>
            <Link smooth to="#blog">
              <Button>
                <Typography textAlign="center">{pages[2]}</Typography>
              </Button>
            </Link>
            <Link smooth to="#contact">
              <Button>
                <Typography textAlign="center">{pages[3]}</Typography>
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;

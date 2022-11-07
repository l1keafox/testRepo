import React from "react";
import { Container } from "@mui/system";
import Landing from "../Landing/Landing.js";
import About from "../About/About.js";
import FAQ from "../FAQ/FAQ.js";
import Blog from "../Blog/Blog.js";
import Contact from "../Contact/Contact.js";
import "./home.css";
//id="home" className="homeContainer"
function Home() {
  return (
    <div >
      <Landing />
      <About />
      <Container maxWidth="lg">
        <FAQ />
        <Blog />
      </Container>
      <Contact />
    </div>
  );
}

export default Home;

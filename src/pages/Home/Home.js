import React from "react";
import { Container } from "@mui/system";
import Landing from "../../components/Landing/Landing.js";
import About from "../../components/About/About.js";
import FAQ from "../../components/FAQ/FAQ.js";
import Blog from "../../components/Blog/Blog.js";
import Contact from "../../components/Contact/Contact.js";
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

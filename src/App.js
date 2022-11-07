import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Landing from "./pages/Landing/Landing.js";
import Contact from "./pages/Contact/Contact.js";
import Blog from "./pages/Blog/Blog.js";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#landing" element={<Landing />} />
          <Route path="/#about" element={<About />} />
          <Route path="/#contact" element={<Contact />} />
          <Route path="/#blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

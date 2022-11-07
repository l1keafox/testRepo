import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Home from "./pages/Home/Home.js";
import About from "./components/About/About.js";
import Landing from "./components/Landing/Landing.js";
import Contact from "./components/Contact/Contact.js";
import Blog from "./components/Blog/Blog.js";
import "./App.css";

function App() {
  return (
    <>
        <Header />
          <Home />
    </>
  );
}

export default App;

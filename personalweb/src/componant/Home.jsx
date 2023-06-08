import React from "react";
import Navbar from "./Nav";
import Footer from "./Footer";
import AboutMy from "./ArwaStory";
import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Card from "./Cards";
import CallBlog from "./botton";
function Home() {
  return (
    <>
      <Hero />
      <Card />
      <CallBlog />
    </>
  );
}

export default Home;

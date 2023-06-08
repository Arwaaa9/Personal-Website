import React from "react";
import Navbar from "./componant/Nav";
import Footer from "./componant/Footer";
import Home from "./componant/Home";
import Arwa from "./componant/ArwaStory";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WhoisArwa!" element={<Arwa />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

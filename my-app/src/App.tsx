import React from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skill from "components/skill/Skill";

const App = () => {
    return (
        <>
          <Navbar />
          <main className="main">
            <Home />
            <div className="spacer layer1"></div>
            <About />
            <div className="spacer layer2"></div>
            <Skill />
            <div className="spacer layer3"></div>
          </main>
        </>
      );
}

export default App;
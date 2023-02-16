import React from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";


const App = () => {
    return (
        <>
          <Navbar />
          <main className="main">
            <Home />
            <div className="spacer layer1"></div>
            <About />
          </main>
        </>
      );
}

export default App;
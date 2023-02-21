import React from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import Contact from "./components/contact/Contact";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const observer = new IntersectionObserver(
  (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting) return
      const elem = entry.target as HTMLElement
      fillBar(elem)
      if (entry.isIntersecting) observer.unobserve(entry.target)
    })
  }
)

function fillBar(x: HTMLElement) {
  const bars = document.getElementsByClassName("bar")
  for (let i = 0; i < bars.length; i++) {
    const bar = bars[i] as HTMLElement
    const amount = bar.children[0].classList

    if (amount.contains("five")) {
      ;(bar.children[0] as HTMLElement).style.width = "100%"
      ;(bar.children[0] as HTMLElement).style.animation = "five 3s"
    } else if (amount.contains("four")) {
      ;(bar.children[0] as HTMLElement).style.width = "80%"
      ;(bar.children[0] as HTMLElement).style.animation = "four 3s"
    } else if (amount.contains("three")) {
      ;(bar.children[0] as HTMLElement).style.width = "60%"
      ;(bar.children[0] as HTMLElement).style.animation = "three 3s"
    } else if (amount.contains("two")) {
      ;(bar.children[0] as HTMLElement).style.width = "40%"
      ;(bar.children[0] as HTMLElement).style.animation = "two 3s"
    } else if (amount.contains("one")) {
      ;(bar.children[0] as HTMLElement).style.width = "20%"
      ;(bar.children[0] as HTMLElement).style.animation = "one 3s"
    }
  }
}

window.onload = () => {
  let interval = setInterval(function () {
    const skills = document.querySelector(".skills__section")
    if (skills) {
      console.log("skills found")
      observer.observe(skills)
      clearInterval(interval)
    } else {
      console.log("skills not found")
    }
  }, 3000)
}

const override: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  top: "50%",
  left: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#2C3639",
}

const App = () => {
  const [loading, setLoading] = React.useState(false)
  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {loading ? (
        <ClimbingBoxLoader
          color={"#A27B5C"}
          loading={loading}
          cssOverride={override}
          size={15}
        />
      ) : (
        <>
          <Navbar />
          <main className="main">
            <Home />
            <div className="spacer layer1"></div>
            <About />
            <div className="spacer layer2"></div>
            <Skill />
            <div className="spacer layer3"></div>
            <Contact />
            <div className="spacer layer4"></div>
          </main>
        </>
      )}
    </>
  )
}

export default App

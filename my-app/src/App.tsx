import React from "react"
import "./App.css"
import Navbar from "./components/header/Navbar"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Skill from "./components/skill/Skill"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Projects from "components/projects/Projects"
import Scrollup from "components/scroll/Scrollup"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"

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
    } else if (amount.contains("four_five")) {
      ;(bar.children[0] as HTMLElement).style.width = "90%"
      ;(bar.children[0] as HTMLElement).style.animation = "four_five 3s"
    } else if (amount.contains("four")) {
      ;(bar.children[0] as HTMLElement).style.width = "80%"
      ;(bar.children[0] as HTMLElement).style.animation = "four 3s"
    } else if (amount.contains("three_five")) {
      ;(bar.children[0] as HTMLElement).style.width = "70%"
      ;(bar.children[0] as HTMLElement).style.animation = "three_five 3s"
    } else if (amount.contains("three")) {
      ;(bar.children[0] as HTMLElement).style.width = "60%"
      ;(bar.children[0] as HTMLElement).style.animation = "three 3s"
    } else if (amount.contains("two_five")) {
      ;(bar.children[0] as HTMLElement).style.width = "50%"
      ;(bar.children[0] as HTMLElement).style.animation = "two_five 3s"
    } else if (amount.contains("two")) {
      ;(bar.children[0] as HTMLElement).style.width = "40%"
      ;(bar.children[0] as HTMLElement).style.animation = "two 3s"
    } else if (amount.contains("one_five")) {
      ;(bar.children[0] as HTMLElement).style.width = "30%"
      ;(bar.children[0] as HTMLElement).style.animation = "one_five 3s"
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
      observer.observe(skills)
    } else {
      console.log("skills not found")
    }

    let name = document.getElementById("name") as HTMLInputElement
    let email = document.getElementById("email") as HTMLInputElement
    let message = document.getElementById("message") as HTMLInputElement
    let submitButton = document.getElementById(
      "sendButton"
    ) as HTMLButtonElement

    let isName = false
    let isEmail = false
    let isMessage = false

    if (submitButton) {
      clearInterval(interval)
    } else {
    }

    name.addEventListener("input", () => {
      isName = checkName(name.value)
      checkButton(submitButton, isName, isEmail, isMessage)
    })

    email.addEventListener("input", () => {
      isEmail = checkEmail(email.value)
      checkButton(submitButton, isName, isEmail, isMessage)
    })

    message.addEventListener("input", () => {
      isMessage = checkMessage(message.value)
      checkButton(submitButton, isName, isEmail, isMessage)
    })

    submitButton.addEventListener("click", () => {
      submitButton.classList.add("disabled")
    })

    const sectionAll = document.querySelectorAll<HTMLElement>("section[id]")
    const navLi = document.querySelectorAll<HTMLElement>("nav .nav__menu ul li")

    window.addEventListener("scroll", () => {
      let current: string | null = null
      sectionAll.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        if (window.scrollY >= sectionTop - sectionHeight) {
          current = section.getAttribute("id")
        }
        console.log(current)
      })

      navLi.forEach(li => {
        if (li.children[0].classList.contains("active")) {
          li.children[0].classList.remove("active")
        }
        if (current !== null && li.children[0].classList.contains(current)) {
          li.children[0].classList.add("active")
        }
      })
    })
  }, 3000)
}

const checkButton = (
  submitButton: any,
  isName: boolean,
  isEmail: boolean,
  isMessage: boolean
) => {
  if (isName && isEmail && isMessage) {
    submitButton.classList.remove("disabled")
  } else {
    submitButton.classList.add("disabled")
  }
}

const checkName = (name: any) => {
  let error = document.getElementById("nameError") as HTMLParagraphElement

  if (name.length === 0) {
    error.classList.add("hidden")
    return false
  } else if (name.match(/^[A-Za-z]+$/) || name.includes(" ")) {
    error.classList.add("hidden")
    return true
  } else {
    error.classList.remove("hidden")
    return false
  }
}

const checkEmail = (email: any) => {
  let error = document.getElementById("emailError") as HTMLParagraphElement
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  if (email.length === 0) {
    error.classList.add("hidden")
    return false
  } else if (expression.test(email)) {
    error.classList.add("hidden")
    return true
  } else {
    error.classList.remove("hidden")
    return false
  }
}

const checkMessage = (message: any) => {
  if (message.length === 0) {
    return false
  } else {
    return true
  }
}

const override: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  top: "50%",
  left: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  backgroundColor: "var(--primary-dark-mode)",
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
          color={"var(--primary-accent-color"}
          loading={loading}
          cssOverride={override}
          size={15}
        />
      ) : (
        <>
          <Navbar />
          <main className="main">
            <Home />
            <div className="spacer split-1"></div>
            <About />
            <div className="spacer split-2"></div>
            <Skill />
            <div className="spacer split-3"></div>
            <Projects />
            <div className="spacer split-4"></div>
            <Contact />
          </main>
          <Footer />
          <Scrollup />
        </>
      )}
    </>
  )
}

export default App

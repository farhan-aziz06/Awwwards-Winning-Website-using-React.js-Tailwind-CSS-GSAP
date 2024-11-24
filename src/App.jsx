import About from "./Components/About"
import Contact from "./Components/Contact"
import Features from "./Components/Features"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import NavBar from "./Components/Navbar"
import Story from "./Components/Story"

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden">
    <NavBar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App

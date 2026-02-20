import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import CoffeeList from "./components/CoffeeList"

gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <CoffeeList />
       
    </main>
  )
}

export default App
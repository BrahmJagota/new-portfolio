import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="bg-black">
      <Hero />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;

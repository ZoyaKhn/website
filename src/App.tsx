import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Projects from "./components/Projects";
import Volunteering from "./components/Volunteering";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Leadership />
        <Projects />
        <Volunteering />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}

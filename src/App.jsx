import { useState } from "react";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <div className="wrapper" data-theme={isLightMode ? "light" : "dark"}>
      <Navigation isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

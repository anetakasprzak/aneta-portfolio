import { useState } from "react";

import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

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

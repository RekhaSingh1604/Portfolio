// import React from 'react'
// import Header from './components/Header'
// import Hero from './components/Hero'
// import About from './components/About'
// import Skills from './components/Skills'
// import Resume from './components/Resume'
// import Contact from './components/Contact'
// const App = () => {
//   return (
//    <>
//    <Header/>
//    <Hero/>
//    <About/>
//    <Skills/>
   
//    <Contact/>
  
//    </>
//   )
// }

// export default App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
  );
}

export default App;
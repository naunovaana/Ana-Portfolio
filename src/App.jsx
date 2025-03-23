import './App.css'
import Hero from "./pages/Hero.jsx";
import MyKnowledge from "./pages/MyKnowledge.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import MyProjects from "./pages/MyProjects.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Navbar from "./components/Navbar.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
    return (
        <>
            <Navbar/>
            <div id="hero"><Hero/></div>
            <div id="knowledge"><MyKnowledge/></div>
            <div id="about-me"><AboutMe/></div>
            <div id="projects"><MyProjects/></div>
            <div id="contact"><ContactPage/></div>
        </>
    )
}


export default App

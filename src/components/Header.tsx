import "./Header.css";
import selfPortrait from "../assets/self-portrait.png"

export default function Header() {

    return (
        <>
            <div className="topNavigation">
                <h3>NICHOLAS SALES</h3>
                <a href="contact.js">Contact</a>
                <a href="work.js">Work</a>
                <a href="projects.js">Projects</a>
                <a href="about.js">About</a>
            </div>
            <a href="./index.js">
            <img className="selfPortrait" src={selfPortrait} alt="Self-Portrait"/>
            </a>
        </>

    )
}
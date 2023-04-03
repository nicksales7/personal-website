import "./Header.css";

export default function Header() {

    return (
        <>
            <div className="topNavigation">
                <h3>NICHOLAS SALES</h3>
                <a href="./index.js">
                <img className="selfPortrait" src="/self-portrait.png" alt="Self-Portrait" />
                </a>
                <a href="contact.js">Contact</a>
                <a href="work.js">Work</a>
                <a href="projects.js">Projects</a>
                <a href="about.js">About</a>
            </div>
        </>

    )
}
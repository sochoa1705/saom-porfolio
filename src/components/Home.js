import logo from "../img/logo_i.png";
import React, {useState} from "react";
import "../styles/Home.css";

function Home() {
  //fixed header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
  const [show, setShow] = useState(false);
  return (
    <div id="home-section" className="home">
      <div className="home_bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt=""></img>
          </div>
          <div className="navigation px__30">
            <ul className="nav_bar d__flex">
              <a href="#home-section">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#about-section">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Knowledge-section">
                <li className="nav__items mx__15">Knowledge</li>
              </a>
              <a href="#project-section">
                <li className="nav__items mx__15">Projects</li>
              </a>
              <a href="#experience-section">
                <li className="nav__items mx__15">Experience</li>
              </a>
              <a href="#contact-section">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#home-section">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="#about-section">About</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Knowledge-section">Knowledge</a>
                </li>
                <li className="sideNavbar">
                  <a href="#portfolio">Projects</a>
                </li>
                <li className="sideNavbar">
                  <a href="#experience-section">Experience</a>
                </li>
                <li className="sideNavbar">
                  <a href="#contact-section">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        {/*HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta"></div>
            <h1 className="home__text pz__10">BIENVENIDOS A MI MUNDO</h1>
            <h2 className="home__text pz__10">Hola, soy Sebastián Ochoa</h2>
            <h3 className="home__text sweet pz__10">
              Estudiante de Ingeniería en TI.
            </h3>
            <h4 className="home__text white pz__10">Quito, EC.</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

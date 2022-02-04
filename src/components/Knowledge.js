import React from "react";
import "../styles/Knowledge.css";

function Knowledge() {
  return (
    <div id="Knowledge-section"  className="knowledge component__space">
      <div className="heading">
        <h1 className="heading">Conocimientos</h1>
        <p className="heading p__color">Todo lo que necesitas es perspectiva</p>
        <p className="heading p__color">y un sueño</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="knowledge__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <div className="knowledge__meta">
                <h1 className="knowledge__text">Frameworks</h1>
                <p className="p knowledge__text p__color">Angular</p>
                <p className="p knowledge__text p__color">Ionic</p>
                <p className="p knowledge__text p__color">React</p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="knowledge__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="knowledge__meta">
                <h1 className="knowledge__text">Bases de Datos</h1>
                <p className="p knowledge__text p__color">Oracle</p>
                <p className="p knowledge__text p__color">MySQL</p>
                <p className="p knowledge__text p__color">SQLite</p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="knowledge__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="knowledge__meta">
                <h1 className="knowledge__text">Inglés</h1>
                <p className="p knowledge__text p__color">Suficiencia</p>
                <p className="p knowledge__text p__color">Idioma Inglés</p>
                <p className="p knowledge__text p__color">Séptimo Semestre</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="knowledge__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="knowledge__meta">
                <h1 className="knowledge__text">Low Code Development</h1>
                <p className="p knowledge__text p__color">Microsoft Power Platform</p>
                <p className="p knowledge__text p__color">Power BI</p>
                <p className="p knowledge__text p__color">Power Automate</p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="knowledge__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="knowledge__meta">
                <h1 className="knowledge__text">Soporte Técnico</h1>
                <p className="p knowledge__text p__color">Help desk</p>
                <p className="p knowledge__text p__color">Hardware</p>
                <p className="p knowledge__text p__color">Software</p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="knowledge__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="knowledge__meta">
              <h1 className="knowledge__text">Lenguajes Manejados</h1>
                <p className="p knowledge__text p__color">C++</p>
                <p className="p knowledge__text p__color">Java</p>
                <p className="p knowledge__text p__color">Javascript, PHP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knowledge;

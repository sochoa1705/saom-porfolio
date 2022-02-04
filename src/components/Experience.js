import React from "react";
import "../styles/Experience.css";
import Ref1 from '../img/Ref1.jpg';
import Ref2 from '../img/Ref2.jpg';
import Ref3 from '../img/Ref3.png';


function Experience() {
  return (
    <div id="experience-section" className="experience component__space">
      <div className="heading">
        <h1 className="heading">Experiencia Laboral</h1>
        <p className="heading p__color">La pasión es el inicio del éxito</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Ref1}
                    alt="experience 1"
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Experience__meta absolute">
                <h5 className="project__text">Low Code Development</h5>
                <h4 className="project__text">Automatización en procesos de RRHH</h4>
                <a href="https://www.slb.com/" rel="noreferrer" target="_blank" className="experience project__btn">Ver más</a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Ref2}
                    alt="experience 2"
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Experience__meta absolute">
                <h5 className="project__text">Soporte IT Latam</h5>
                <h4 className="project__text">Help desk y soporte a nivel regional</h4>
                <a href="https://ecuador.utel.edu.mx/" rel="noreferrer" target="_blank" className="experience project__btn">Ver más</a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Ref3}
                    alt="experience 3"
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Experience__meta absolute">
                <h5 className="project__text">Diseñador Web Junior</h5>
                <h4 className="project__text">Propuesta y diseño de sitio web</h4>
                <a href="https://ec.linkedin.com/in/andr%C3%A9s-calder%C3%B3n-montalvo" rel="noreferrer" target="_blank" className="experience project__btn">Ver más</a>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default Experience;

import React from "react";
import "../styles/Project.css";
import Project1 from '../img/Project1.jpg'
import Project2 from '../img/Project2.png'
import Project3 from '../img/Project3.jpg'

function Project() {
  return (
    <div id="project-section" className="project component__space">
      <div className="heading">
        <h1 className="heading">Últimos Proyectos </h1>
        <p className="heading p__color">La edad no es garantía de eficiencia.</p>
        <p className="heading p__color">Y la juventud no es garantía de innovación.</p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
                  <div className="project__box pointer relative">
                      <div className="project__box__img pointer relative">
                          <div className="project__img__box">
                              <img src={Project1} alt="project 1" className="project__img"/>
                          </div>
                          <div className="mask__effect"></div>

                      </div>
                      <div className="project__meta absolute">
                          <h5 className="project__text">Low Code Development</h5>
                          <h4 className="project__text">Automatización de procesos</h4>
                          
                      </div>

                  </div>

              </div>

              <div className="col__3">
                  <div className="project__box pointer relative">
                      <div className="project__box__img pointer relative">
                          <div className="project__img__box">
                              <img src={Project2} alt="project 2" className="project__img"/>
                          </div>
                          <div className="mask__effect"></div>

                      </div>
                      <div className="project__meta absolute">
                          <h5 className="project__text">Android Development</h5>
                          <h4 className="project__text">Integración de APIs y desarrollo móvil</h4>
                          
                      </div>

                  </div>

              </div>

              <div className="col__3">
                  <div className="project__box pointer relative">
                      <div className="project__box__img pointer relative">
                          <div className="project__img__box">
                              <img src={Project3} alt="project 3" className="project__img"/>
                          </div>
                          <div className="mask__effect"></div>

                      </div>
                      <div className="project__meta absolute">
                          <h5 className="project__text">Web Development</h5>
                          <h4 className="project__text">Manejo de Frameworks</h4>
                         
                      </div>

                  </div>

              </div>
              <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                  <button className="view__more pointer btn">Ver más</button>

              </div>

          </div>

      </div>
    </div>
  );
}

export default Project;

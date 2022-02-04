import aboutImg from "../img/aboutImg.jpg";
import React from "react";
import "../styles/About.css";

function About() {
    //  Up To Top Btn
    window.addEventListener("scroll", function(){
        const upToTop = document.querySelector("a.bottom__to__top");
         upToTop.classList.toggle("active", window.scrollY > 0)
      });
  return (
    <div id="about-section" className="about component__space">
      <div  className="container">
        <div className="row">
          <div className="col__2">
            <img className="about__img" src={aboutImg} alt="" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">Sobre Mí</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                A lo largo de mi vida me a llamado la atención el aprender
                nuevas cosas en todos los ambitos en los que me desenvuelvo,
                buscar el equilibrio en mi vida bajo la responsabilidad y
                dedicación; celebrar la vida con mi familia y amigos y siempre
                mantenerme en constante crecimiento gracias a la practica de
                actividades artístico culturales y físicas.
              </p>
              <p className="about__text p__color">
                Como estudiante de Ingeniería en Tecnologías de la Información
                me he planteado en aprender nuevas técnicas y métodos que surgen
                por la evolución de la tecnología, conocer el área laboral en la
                que me debo desenvolver, desarrollar capacidades y emplear las
                herramientas que necesito para funcionar de manera idónea en
                cualquier organización a la que me incorpore.
              </p>
              <div className="about__button d_flex align__items__center">
                <a
                  href="https://drive.google.com/file/d/1VtXUu9h0-LAi3yQsdrPuhI0MOAE_-U1q/view?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="about btn pointer">Ver CV</button>
                </a>
                <a href="#contact-section">
                  <button className="about btn pointer">Contáctame</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* up to top btn */}
      <div className="up__to__top__btn">
        <a href="#home-section" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;

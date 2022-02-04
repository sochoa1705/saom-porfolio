import React from "react";
import "../styles/Contact.css";
import contactImg from "../img/contactImg.jpg";

function Contact() {
  return (
    <div id="contact-section" className="contact component__space">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Contáctame.</h1>
              <p className="hire__text white">
                Dispuesto a seguir creciendo profesionalmente. Contáctame via
                teléfono:
              </p>
              <p className="hire__text white">
                <strong>+593 995 676 593</strong> o via email{" "}
                <strong>saochoa1@espe.edu.ec</strong>
              </p>
            </div>
            <div className="input__box">
              <input
                type="text"
                className="contact name"
                placeholder="Su nombre *"
              />
              <input
                type="text"
                className="contact email"
                placeholder="Su correo *"
              />
              <input
                type="text"
                className="contact subject"
                placeholder="Asunto *"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Escribe tu mensaje"
              ></textarea>
              <button className="btn contact pointer">
                Enviar
              </button>
            </div>
          </div>
        </div>
        <div className="col__2">
          <img src={contactImg} alt="img contact" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";

const Contact = () => (
  <div className="container">
    <h2>Contáctanos</h2>
    <form>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input type="text" className="form-control" placeholder="Tu nombre" />
      </div>
      <div className="mb-3">
        <label className="form-label">Correo Electrónico</label>
        <input type="email" className="form-control" placeholder="tuemail@example.com" />
      </div>
      <div className="mb-3">
        <label className="form-label">Mensaje</label>
        <textarea className="form-control" rows="4" placeholder="Escribe tu mensaje"></textarea>
      </div>
      <button type="submit" className="btn btn-warning">Enviar</button>
    </form>
  </div>
);

export default Contact;

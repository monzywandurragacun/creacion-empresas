const About = () => (
  <div className="container text-center py-5">
    <h1 className="fw-bold">Sobre Nosotros</h1>
    <p className="lead">Somos una plataforma dedicada a la venta de artesanías auténticas de Colombia, conectando a los mejores artesanos con compradores que valoran la tradición y la cultura.</p>
    
    <div className="mt-5">
      <h2 className="mb-4">Ubicación</h2>
      <p>Nos encontramos en San Gil, Santander, un lugar reconocido por su riqueza artesanal y cultural.</p>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.4805314578775!2d-73.13345322501273!3d6.558830193430055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e684ffcc78a98a1%3A0x73323c4b6fcd8451!2sSan%20Gil%2C%20Santander%2C%20Colombia!5e0!3m2!1sen!2sus!4v1708657410730!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          className="rounded shadow"
        ></iframe>
      </div>
    </div>
  </div>
);

export default About;
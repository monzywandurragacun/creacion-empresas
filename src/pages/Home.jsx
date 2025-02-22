import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="container text-center py-5">
    <h1 className="fw-bold">Explora la Riqueza de Nuestra Cultura</h1>
    <p className="lead">Conéctate con los mejores artesanos de Colombia y descubre piezas únicas llenas de historia y tradición.</p>
    <Link to="/about" className="btn btn-warning btn-lg mt-3">Conócenos</Link>

    {/* Sección de Artesanías */}
    <div className="mt-5">
      <h2 className="mb-4">Nuestras Artesanías</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow">
            <img src="https://media.istockphoto.com/id/534624660/photo/wayuu-backpack.jpg?s=2048x2048&w=is&k=20&c=2XLz11mrPAygiXsOXUrh9TEhL9MiFYQDrGDkNLGZ1zc=" alt="Artesanía 1" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
            <div className="card-body">
              <p className="card-text">Hermosas mochilas tejidas a mano por comunidades indígenas.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow">
            <img src="https://media.istockphoto.com/id/1313178219/photo/decoration.jpg?s=2048x2048&w=is&k=20&c=vDmoArGARXTvbSxn1vtn8XwJOgvVQYdLqVM8dXS4gYs=" alt="Artesanía 2" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
            <div className="card-body">
              <p className="card-text">Cerámicas tradicionales pintadas a mano con diseños únicos.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow">
            <img src="https://media.istockphoto.com/id/178954023/photo/black-and-white-antique-sombrero.jpg?s=2048x2048&w=is&k=20&c=vP6yKwqGCftLrXhcfIJ6F6xeUXzlbc6XvYcbfe3F8u8=" alt="Artesanía 3" className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
            <div className="card-body">
              <p className="card-text">Sombreros vueltiaos, símbolo de la cultura colombiana.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;


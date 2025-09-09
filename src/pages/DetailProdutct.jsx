import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

const DetailProdutct = () => {
  // uso Params per recuperare l'id per vedere la pagina di dettaglio
  const { id } = useParams();
  // data è un oggetto non un array
  const [data, setDatas] = useState({});
  //navigate da usare per la navigazione al click
  const navigate = useNavigate();

  // faccio la chiamata axios per recuperare l'array e inserirli in data
  const fetchData = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => setDatas(resp.data));
  };

  console.log(data);
  // quindi al caricamento della componente avverà la chiamata
  useEffect(fetchData, [id]);
  const { title, price, category, image } = data;
  return (
    <div className="container my-1">
      <div className="row d-flex flex-wrap">
        {/* carta */}
        <div className="col-5 g-3" key={id}>
          <div className="card h-100 d-flex flex-column ">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Category: {category}</li>
              <li className="list-group-item">Price: {price}</li>
              <li className="">
                <NavLink className="list-group-item" to={`/products`}>
                  Back to the shop
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-2">
          <div className="row my-2">
            {/* Navigazione programmatica*/}
            <button
              className="btn btn-primary g-1 my-1"
              onClick={() => navigate(`/products/${parseInt(id) + 1}`)}
            >
              Next 🎁
            </button>
            <button
              className="btn btn-primary g-1 my-1"
              onClick={() => navigate(`/products/${parseInt(id) - 1}`)}
            >
              Previous 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProdutct;

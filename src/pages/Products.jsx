import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
//richiamo use useBudget
import { useBudget } from "../contexts/BudgetContext";

function Products() {
  const [datas, setDatas] = useState([]);
  const { budgetMode, setBudgetMode } = useBudget(); // destruture

  // faccio la chiamata axios per recuperare l'array e inserirli in data
  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => setDatas(resp.data));
  };

  console.log(datas);
  // quindi al caricamento della componente avverà la chiamata
  useEffect(fetchData, []);

  return (
    <div className="container my-1">
      <div className="row d-flex flex-wrap">
        {/* carta */}
        {datas.map((info) => {
          const { id, title, price, description, category, image } = info;
          return (
            <div className="col-5 g-3" key={id}>
              <div className="card h-100 d-flex flex-column ">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">
                    Read the description: {description}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Category: {category}</li>
                  <li className="list-group-item">Price: {price}</li>
                  <li className="">
                    <NavLink className="list-group-item" to={`/products/${id}`}>
                      👀 Give a look 👀
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;

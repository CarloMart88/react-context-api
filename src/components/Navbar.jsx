import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="container my-1">
      <div className="row">
        <div className="col-12">
          <ul className="list-unstyled d-flex gap-3">
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/products">products</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

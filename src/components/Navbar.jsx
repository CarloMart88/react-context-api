import { NavLink } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";

/*MILESTONE 2

Create un componente Navbar.jsx (se non lo avete già)

Inseritelo in App.jsx (oppure nel vostro componente di layout se avete organizzato l’app in questo modo)
All’interno della Navbar aggiungete un bottone “Modalità Budget” che attiva/disattiva budgetMode con un click
Il bottone deve cambiare etichetta in base allo stato (Attiva Modalità Budget / Disattiva Modalità Budget) */

function Navbar() {
  //recupero useBudget e lo destrutturo
  const { budgetMode, setbudgetMode } = useBudget();
  //
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
          <div className="col-6">
            {/* adesso creo il bottone con il click aggiorna il valore di budgetMode  */}
            <button
              className={`btn ${
                budgetMode ? `btn-primary` : `btn-success`
              } m-1`}
              onClick={() =>
                //adesso riesco a vedere lo stato
                setbudgetMode(!budgetMode, console.log(!budgetMode))
              }
            >
              {budgetMode
                ? "Disattiva Modalità Budget  "
                : "Attiva Modalità Budget"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

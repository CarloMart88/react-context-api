import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Products from "./pages/Products";
import DetailProdutct from "./pages/DetailProdutct";
import { BudgetProvider } from "./contexts/BudgetContext";

//importo BudgetProvider con cui avvolgo tutte le rotte

function App() {
  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products">
              <Route index element={<Products />}></Route>
              {/* creo la rotta annidata */}
              <Route path=":id" element={<DetailProdutct />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
  );
}

export default App;

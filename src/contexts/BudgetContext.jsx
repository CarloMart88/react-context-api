import { createContext, useState, useContext } from "react";

// creo il contesto
const BudgetContext = createContext();

// ora il provider
const BudgetProvider = ({ children }) => {
  //Deve contenere uno stato budgetMode di tipo booleano (true/false)
  //Deve fornire anche la funzione per modificarlo (setBudgetMode)
  const [budgetMode, setbudgetMode] = useState(false);

  const value = { budgetMode, setbudgetMode };

  return (
    <budgetContext.Provider value={value}>{childern}</budgetContext.Provider>
  );
};

// definisco l'hook usare il contesto

const useBudget = () => {
  const context = useContext(BudgetContext);
  return context;
};

// ed esporto tutto
export default { BudgetProvider, useBudget };

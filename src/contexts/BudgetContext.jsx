import { createContext, useState, useContext } from "react";

// creo il contesto
const budgetContext = createContext();

// ora il provider
const BudgetProvider = ({ childern }) => {
  //Deve contenere uno stato budgetMode di tipo booleano (true/false)
  //Deve fornire anche la funzione per modificarlo (setBudgetMode)
  const [budgetMode, setbudgetMode] = useState(false);

  const value = { budgetMode, setbudgetMode };

  return <budgetContext value={value}>{childern}</budgetContext>;
};

// definisco l'hook usare il contesto

const useBudget = () => {
  const context = useContext(budgetContext);
  return context;
};

// ed esporto tutto
export default [BudgetProvider, useBudget];

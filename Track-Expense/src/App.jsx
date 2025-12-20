import { useState } from "react";
import "./App.css";
import "./components/ExpenseForm"
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expensedata from "./expensedata.js";

export default  function App () {

  const [expenses, setExpenses] = useState(expensedata);

  return (
      <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses = {setExpenses} />
        <ExpenseTable expenses = {expenses} />
      </div>
    </main>
  )
}

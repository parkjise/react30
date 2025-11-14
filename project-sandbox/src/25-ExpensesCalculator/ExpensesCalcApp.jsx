import React, { useEffect, useRef, useState } from "react";
import Title from "../components/Title";
import ExpensesForm from "./components/ExpensesForm";
import ExpensesList from "./components/ExpensesList";
import { BudgetStyle } from "./components/styles/Budget.style";
import { parse, v4 as uuidV4 } from "uuid";
import Alert from "../components/Alert";

const initialExpense = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

const ExpensesCalcApp = () => {
  const [expenses, setExpense] = useState(initialExpense);
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [charge, setCharge] = useState("");
  const [budget, setBudget] = useState("");
  const [id, setId] = useState(0);
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
  });

  const changeBudget = (e) => {
    // setBudget(e.target.value);
    setBudget(inputBudget.current.value);
  };

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({
      show: true,
      type,
      text,
    });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date !== "" && charge !== "" && amount > 0) {
      if (edit) {
        let tempExpense = expenses.map((item) => {
          return item === id ? { ...item, date, charge, amount } : item;
        });
        setExpense(tempExpense);
        setEdit(false);
        handleAlert({ type: "success", text: "Expense Edited" });
      } else {
        const singleExpense = { id: uuidV4(), date, charge, amount };
        setExpense([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "Expense Edited" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({ type: "danger", text: "Please Complete all fields" });
    }
  };

  let inputBudget = useRef(null);

  useEffect(() => {
    inputBudget.current.value === "" && inputBudget.current.focus();
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // console.log("expenses:", expenses);

  const clearAllExpenses = () => {
    setExpense([]);
    handleAlert({ type: "danger", text: "Please Complete all fields" });
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete Expense ?")) {
      let filteredExpense = expenses.filter((expense) => expense.id !== id);
      setExpense(filteredExpense);
    }
  };

  const handleEdit = (id) => {
    let editExpense = expenses.find((expense) => expense.id === id);
    let { charge, amount } = editExpense;
    setCharge(charge);
    setAmount(amount);
    setId(id);
    setEdit(true);
  };

  return (
    <main className="container">
      <Title text={"Expenses Calculator"} />
      {/* Alert comp */}
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "25px",
          margin: "1rem",
        }}
      >
        <aside>
          {/* ExpensesForm */}
          <ExpensesForm
            date={date}
            handleDate={handleDate}
            charge={charge}
            handleCharge={handleCharge}
            amount={amount}
            handleAmount={handleAmount}
            handleSubmit={handleSubmit}
            edit={edit}
          />
          <section className="card mt-2 bg-primary text-light text-right">
            <div className="card-body">
              <BudgetStyle>
                <h3>Budget : $</h3>
                <input
                  type="number"
                  value={budget}
                  onChange={changeBudget}
                  ref={inputBudget}
                />
              </BudgetStyle>
              <h3 className="mb-1">
                Total expenses : $
                {expenses.reduce((total, expense) => {
                  return (total += parseInt(expense.amount, 10));
                }, 0)}
              </h3>
              {/* Calc economies */}
              <h3>Economies : ${calcEconomies}</h3>
            </div>
          </section>
        </aside>
        <section>
          <ExpensesList
            expenses={expenses}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleClearAllExpenses={() => clearAllExpenses(budget, expenses)}
          />
        </section>
      </section>
    </main>
  );
};

const calcEconomies = (budget, expenses) => {
  return (
    budget -
    expenses.reduce((total, expense) => {
      return (total += parseInt(expense.amount, 10));
    }, 0)
  );
};
export default ExpensesCalcApp;

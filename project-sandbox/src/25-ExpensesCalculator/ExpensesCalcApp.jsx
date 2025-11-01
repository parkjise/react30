import React, { useEffect, useRef, useState } from "react";
import Title from "../components/Title";
import ExpensesForm from "./components/ExpensesForm";
import ExpensesList from "./components/ExpensesList";
import { BudgetStyle } from "./components/styles/Budget.style";
import { v4 as uuidV4 } from "uuid";

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

	let edit;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (date !== "" && charge !== "" && amount > 0) {
			if (edit) {
				let tempExpense = expenses.map((item) => {
					return item === id ? { ...item, date, charge, amount } : item;
				});
				setExpense(tempExpense);
			} else {
				const singleExpense = { id: uuidV4(), date, charge, amount };
				setExpense([...expenses, singleExpense]);
			}
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
	};

	return (
		<main className="container">
			<Title text={"Expenses Calculator"} />
			{/* Alert comp */}
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
							<h3 className="mb-1">Total expenses : $</h3>
							{/* Calc economies */}
							<h3>Economies : $</h3>
						</div>
					</section>
				</aside>
				<section>
					<ExpensesList
						expenses={expenses}
						// handleDelete={handleDelete}
						// handleEdit={handleEdit}
						handleClearAllExpenses={clearAllExpenses}
					/>
				</section>
			</section>
		</main>
	);
};

export default ExpensesCalcApp;

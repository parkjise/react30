
import { MdDelete } from "react-icons/md";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses, clearItems, handleDelete, handleEdit }) => {
	return (
		<>
			<ul className="list">
				{expenses.map((expense) => {
					return (
						<ExpenseItem
							key={expense.id}
							expense={expense}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
						/>
					);
				})}
			</ul>
			{expenses.length > 0 && (
				<button className="btn btn-danger" onClick={clearItems}>
					<MdDelete /> Clear all expenses
				</button>
			)}
		</>
	);
};

export default ExpensesList;

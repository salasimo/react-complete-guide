import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };

    const formVisibilityHandler = (e) => {
        setFormVisibility((prevState) => {
            return !prevState;
        });
    };

    const [formVisibility, setFormVisibility] = useState(false);

    return (
        <div className="new-expense">
            {!formVisibility && (
                <button onClick={formVisibilityHandler}>Add new expense</button>
            )}
            {formVisibility && (
                <ExpenseForm
                    onSaveExspenseData={saveExpenseDataHandler}
                    onCancelBtn={formVisibilityHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;

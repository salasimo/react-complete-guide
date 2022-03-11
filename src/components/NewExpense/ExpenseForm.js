import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState("");
    const titleChangeHandler = (e) => {
        // setUserInput({ ...userInput, enteredTitle: e.target.value });
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: e.target.value,
            };
        });
    };
    // const [enteredAmount, setEnteredAmount] = useState("");
    const amountChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: e.target.value,
            };
        });
    };
    // const [enteredDate, setEnteredDate] = useState("");
    const dateChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: e.target.value,
            };
        });
    };

    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        };
        console.log(expenseData);
        setUserInput({
            enteredTitle: "",
            enteredAmount: "",
            enteredDate: "",
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={userInput.enteredTitle}
                        onChange={titleChangeHandler}
                    ></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        value={userInput.enteredAmount}
                        onChange={amountChangeHandler}
                        type="number"
                        min="0.01"
                        step="0.01"
                    ></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        value={userInput.enteredDate}
                        onChange={dateChangeHandler}
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                    ></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;

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
                entereAmount: e.target.value,
            };
        });
    };
    // const [enteredDate, setEnteredDate] = useState("");
    const dateChangeHandler = (e) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                entereDate: e.target.value,
            };
        });
    };

    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    });

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        onChange={amountChangeHandler}
                        type="number"
                        min="0.01"
                        step="0.01"
                    ></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
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
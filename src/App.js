import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {
            id: "1",
            title: "Car rent",
            amount: 123.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: "2",
            title: "Insurance",
            amount: 422.89,
            date: new Date(2021, 1, 24),
        },
        {
            id: "3",
            title: "Food",
            amount: 90.12,
            date: new Date(2021, 2, 12),
        },
    ];
    return (
        <div>
            <h2>Let's get started!!!</h2>
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            />
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
        </div>
    );
}

export default App;

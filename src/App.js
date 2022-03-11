import Expenses from "./components/Expenses";

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
            title: "Food and drinks",
            amount: 90.12,
            date: new Date(2021, 2, 12),
        },
        {
            id: "4",
            title: "Doctor visit",
            amount: 76.75,
            date: new Date(2021, 4, 2),
        },
    ];
    return (
        <div>
            <h2>Let's get started!!!</h2>
            <Expenses items={expenses} />
        </div>
    );
}

export default App;

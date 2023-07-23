import React from 'react';

const TransactionRow = ({ id, date, description, category, amount }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
};

const TransactionTable = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TransactionRow key={transaction.id} {...transaction} />
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const transactions = [
    {
      "id": 1,
      "date": "2019-12-01",
      "description": "Paycheck from Bob's Burgers",
      "category": "Income",
      "amount": 1000
    },
    // Rest of the transactions...
  ];

  return (
    <div>
      <h1>Transactions</h1>
      <TransactionTable transactions={transactions} />
      <button>Transact</button>
    </div>
  );
};

export default App;
// App.js
import React from 'react';
import './App.css'; // Import the CSS file

function App() {
  // Your App component code here
}

export default App;

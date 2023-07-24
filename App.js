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
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import transactionsData from './transactionsData'; // Replace with the actual data

const App = () => {
  const [filteredTransactions, setFilteredTransactions] = useState(transactionsData);

  const handleSearch = (searchTerm) => {
    const filteredData = transactionsData.filter(
      (transaction) =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filteredData);
  };

  return (
    <div>
      <h1>Transactions</h1>
      {/* Render the SearchBar component and pass handleSearch as a prop */}
      <SearchBar handleSearch={handleSearch} />

      {/* Render the table with filtered transactions */}
      <table>
        {/* Render the table headers */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>

        {/* Render the table body */}
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import TransactionForm from './TransactionForm';
import transactionsData from './transactionsData'; // Replace with the actual data

const App = () => {
  const [filteredTransactions, setFilteredTransactions] = useState(transactionsData);

  const handleSearch = (searchTerm) => {
    const filteredData = transactionsData.filter(
      (transaction) =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filteredData);
  };

  const handleAddTransaction = (newTransaction) => {
    // Assuming you have a unique way to generate the ID for the new transaction
    newTransaction.id = transactionsData.length + 1;
    setFilteredTransactions([...filteredTransactions, newTransaction]);
  };

  return (
    <div>
      <h1>Transactions</h1>
      {/* Render the SearchBar component and pass handleSearch as a prop */}
      <SearchBar handleSearch={handleSearch} />

      {/* Render the TransactionForm component and pass handleAddTransaction as a prop */}
      <TransactionForm handleAddTransaction={handleAddTransaction} />

      {/* Render the table with filtered transactions */}
      <table>
        {/* Render the table headers */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>

        {/* Render the table body */}
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;


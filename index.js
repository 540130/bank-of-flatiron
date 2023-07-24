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

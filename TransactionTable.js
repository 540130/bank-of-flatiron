import React from 'react';
import TransactionTable from './TransactionTable';
import transactionsData from './transactionsData';

const App = () => {
  return (
    <div>
      <h1>Transactions</h1>
      <TransactionTable transactions={transactionsData} />
      <button>Transact</button>
    </div>
  );
};

export default App;

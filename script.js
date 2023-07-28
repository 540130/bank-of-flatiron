// script.js

// Destructure the 'React' and 'ReactDOM' objects from the 'window' object
const { React, ReactDOM } = window;

// TransactionRow component
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

// TransactionTable component
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

// App component
const App = ({ transactions }) => {
  return (
    <div>
      <h1>Transactions</h1>
      <TransactionTable transactions={transactions} />
      <button>Transact</button>
    </div>
  );
};

// Find the 'root' element in the HTML and render the App component
const rootElement = document.getElementById("root");
ReactDOM.render(<App transactions={transactionsData} />, rootElement);


  
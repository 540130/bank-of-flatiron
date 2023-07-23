import React from "react";

const transactions = [
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  },
  {
    "id": 3,
    "date": "2019-12-02",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  },
  {
    "id": 4,
    "date": "2019-12-04",
    "description": "Sunglasses, Urban Outfitters",
    "category": "Fashion",
    "amount": -24.99
  },
  {
    "id": 5,
    "date": "2019-12-06",
    "description": "Venmo, Alice Pays you for Burrito",
    "category": "Food",
    "amount": 8.75
  },
  {
    "id": 6,
    "date": "2019-12-06",
    "description": "Some other transaction",
    "category": "Other",
    "amount": -15.50
  }
];

function App() {
  return (
    <div>
      <h1>All Transactions</h1>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p>Date: {transaction.date}</p>
            <p>Description: {transaction.description}</p>
            <p>Category: {transaction.category}</p>
            <p>Amount: {transaction.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

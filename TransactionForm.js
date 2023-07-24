import React, { useState } from 'react';

const TransactionForm = ({ handleAddTransaction }) => {
  const [formData, setFormData] = useState({
    id: '',
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTransaction(formData);
    setFormData({
      id: '',
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">ID:</label>
      <input type="number" id="id" name="id" value={formData.id} onChange={handleChange} />

      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />

      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        name="amount"
        step="0.01"
        value={formData.amount}
        onChange={handleChange}
      />

      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;

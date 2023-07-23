import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the table with transactions', () => {
    render(<App />);

    // Check if the transactions are displayed in the table
    const transactionRows = screen.getAllByRole('row');
    expect(transactionRows.length).toBe(7); // Assuming there are 7 transactions

    // Check if the "Transact" button is present
    const transactButton = screen.getByRole('button', { name: 'Transact' });
    expect(transactButton).toBeInTheDocument();
  });
});

Transactions App
This is a React application that displays a list of recent bank transactions.

Table of Contents
Description
Project Setup
Core Deliverables
Bonus Deliverables
Usage
Contributing
License
Description
The Transactions App is a mini web app built with React that allows users to view, add, filter, and sort their recent bank transactions. It fetches data from a local server running JSON DB server and displays the transactions in a table format.

Project Setup
To set up the project locally, follow these steps:

Clone the GitHub repository.
Install the required dependencies using npm install.
Create a db.json file and add the provided data for the server.
Run the JSON server using json-server --watch db.json.
Core Deliverables
As a user, you can:

See a table of all transactions.
Fill out and submit the form to add a new transaction. The new transaction will be added to the table (local state only, not persisted to the backend).
Filter transactions by typing into the search bar. Only transactions with a description matching the search term will be shown in the table.
Bonus Deliverables
As a user, you can also:

Sort transactions alphabetically by category or description.
Delete a transaction, which will remove it from the table.
Usage
Start the React app using npm start.
Visit http://localhost:3000 in your web browser to view the app.
Use the table to view transactions and the form to add new transactions.
Use the search bar to filter transactions by description.
Use the sorting feature (bonus) to sort transactions by category or description.
Delete transactions (bonus) by clicking the delete button.
Contributing
Contributions to this project are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.


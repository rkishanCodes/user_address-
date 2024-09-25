
# User Address App

This project is a user registration system built with Node.js for the backend and Vite for the frontend. Users can register with their names and addresses, which are stored in a MongoDB database.

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (via Mongoose)
  - Body-Parser
  - CORS

- **Frontend:**
  - Vite
  - React
  - Axios

## Installation

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install the required packages:
   ```bash
   npm install
   ```

3. Configure your MongoDB connection in `config/db.js`. Make sure MongoDB is running on your local machine.

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```

2. Install the required packages:
   ```bash
   npm install
   ```

## Running the Application

### Start the Backend

1. Navigate to the `backend` directory if you're not already there:
   ```bash
   cd backend
   ```

2. Start the server:
   ```bash
   node index.js
   ```

The backend API will run on `http://localhost:5000`.

### Start the Frontend

1. Navigate to the `frontend` directory if you're not already there:
   ```bash
   cd ../frontend
   ```

2. Start the Vite development server:
   ```bash
   npm run dev
   ```

The frontend will be accessible at `http://localhost: 5173 `.

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Fill out the form with your name and address, then submit.

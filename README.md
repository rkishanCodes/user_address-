Here's a sample `README.md` file for your project, which covers the setup, installation, and usage instructions for both the backend and frontend:

```markdown
# User Address App

This project is a user registration system built with Node.js for the backend and Vite for the frontend. Users can register with their names and addresses, which are stored in a MongoDB database.

## Project Structure

```
/user-address-app
|-- /backend
|   |-- /models
|   |   |-- User.js
|   |   |-- Address.js
|   |-- /routes
|   |   |-- userRoutes.js
|   |-- /config
|   |   |-- db.js
|   |-- server.js
|-- /frontend
|   |-- /src
|   |   |-- App.jsx
|   |   |-- components
|   |   |   |-- AddressForm.jsx
|   |   |-- main.jsx
|   |-- index.html
|   |-- package.json
|   |-- vite.config.js
```

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
   node server.js
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

The frontend will be accessible at `http://localhost:3000`.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Fill out the form with your name and address, then submit.
3. Check the console for the response from the server.

## API Endpoints

### POST `/api/users/register`

- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "address": "123 Main St, Anytown, USA"
  }
  ```

- **Response:**
  ```json
  {
    "user": {
      "_id": "12345",
      "name": "John Doe",
      "__v": 0
    },
    "address": {
      "_id": "67890",
      "userId": "12345",
      "address": "123 Main St, Anytown, USA",
      "__v": 0
    }
  }
  ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
```

### Instructions

1. Create a file named `README.md` in the root directory of your project.
2. Copy and paste the above content into the `README.md` file.
3. Save the file.

This `README.md` provides a comprehensive overview of your project, including installation instructions, usage, and API details, making it easier for others to understand and contribute to your project.
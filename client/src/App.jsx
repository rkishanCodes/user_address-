import React from "react";
import AddressForm from "./components/AddressForm";
import AddressRetrieval from "./components/AddressRetrieval";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <h1>User Address Registration</h1>
      <AddressForm />
      <h2>Retrieve User Addresses</h2>
      <AddressRetrieval />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import axios from "axios";

const AddressRetrieval = () => {
  const [name, setName] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [error, setError] = useState("");

  const handleRetrieve = async (e) => {
    e.preventDefault();
    setError(""); 
    try {
      const response = await axios.get(
        `http://localhost:3000/api/users/addresses?name=${name}`
      );
      setAddresses(response.data);
    } catch (error) {
      console.error("Error retrieving addresses:", error);
      setError("No addresses found for this user.");
      setAddresses([]); 
    }
  };

  return (
    <div>
      <form onSubmit={handleRetrieve} className="addressRetriveFrom">
        <input
          type="text"
          placeholder="Enter Name to Retrieve Addresses"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Retrieve</button>
      </form>
      {error && <p>{error}</p>}
      {addresses.length > 0 && (
        <ul>
          {addresses.map((addr) => (
            <li key={addr._id}>{addr.address}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressRetrieval;

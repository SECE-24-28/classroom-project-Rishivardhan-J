import React, { useState } from "react";
import axios from "axios";

const FetchApiComponent = () => {
  // State to store the list of users
  const [data, setData] = useState([]);

  // Function to fetch data asynchronously
  const fun1 = async () => {
    try {
      const response = await axios("https://jsonplaceholder.typicode.com/users");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>API Fetch</h1>
      
      {/* Conditional Rendering: Show button if no data, otherwise show list */}
      {data.length === 0 ? (
        <div>
          <h3>No data currently loaded.</h3>
          <button onClick={fun1} style={{ padding: "10px 20px", cursor: "pointer" }}>
            Fetch Data
          </button>
        </div>
      ) : (
        <ul>
          {/* Mapping through the data array to render list items */}
          {data.map((item) => {
            return (
              <li key={item.id} style={{ marginBottom: "10px" }}>
                <strong>{item.name}</strong> — {item.email}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FetchApiComponent;
// import React, { useEffect, useState } from "react";
// //import axios from "axios";
// const UseEffectPracticeTwo = () => {
//   const [second, setSecond] = useState(0);
//   useEffect(() => {
//     console.log("Time started");
//     const interval = setInterval(() => {
//       //setSecond((prevSecond) => prevSecond + 1);
//       setSecond(second + 1);
//       // console.log("Seconds passed:", second + 1);
//     }, 100);
//     return () => {
//       clearInterval(interval);
//     };
//   }, [second]);
//   return (
//     <div>
//       <h1>Seconds passed: {second}</h1>
//     </div>
//   );
// };
// export default UseEffectPracticeTwo;

import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosPractice = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []); 

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>User List:</h1>
      {data.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default AxiosPractice;
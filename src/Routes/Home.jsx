import React, { useEffect, useState } from "react";
import Card from "../Components/Card"; // Asegúrate de que la ruta sea correcta
import axios from "axios";

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setDentists(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      }
    };

    fetchDentists();
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      {error && <p>{error}</p>}
      <div className="card-grid">
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;

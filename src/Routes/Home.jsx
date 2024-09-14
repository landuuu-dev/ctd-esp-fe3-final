import React, { useEffect } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { useGlobalContext } from "../Components/utils/global.context";

const Home = () => {
  const { state, dispatch } = useGlobalContext();
  const { data } = state;
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        dispatch({ type: "SET_DATA", payload: response.data });
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <main className={state.theme}>
      {" "}
      {/* Asegúrate de aplicar el tema aquí */}
      <h1>List of dentist</h1>
      {error && <p>{error}</p>}
      <div className="card-grid">
        {data.map((dentist) => (
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

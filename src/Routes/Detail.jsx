import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Detail.css";

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setDentist(response.data);
      } catch (error) {
        setError("Error fetching dentist details");
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDentist();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="detail-container detail-page">
      <h1>Detail Dentist id {id}</h1>
      {dentist ? (
        <div className="detail-content">
          <img
            src="/images/doctor.jpg"
            alt="Dentist"
            className="detail-image"
          />
          <div className="detail-info">
            <h2>{dentist.name}</h2>
            <p>
              <strong>Username:</strong> {dentist.username}
            </p>
            <p>
              <strong>Email:</strong> {dentist.email}
            </p>
            <p>
              <strong>Address:</strong> {dentist.address.street},{" "}
              {dentist.address.city}, {dentist.address.zipcode}
            </p>
            <p>
              <strong>Phone:</strong> {dentist.phone}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={`http://${dentist.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dentist.website}
              </a>
            </p>
            <p>
              <strong>Company:</strong> {dentist.company.name}
            </p>
          </div>
        </div>
      ) : (
        <p>Dentist not found</p>
      )}
    </main>
  );
};

export default Detail;

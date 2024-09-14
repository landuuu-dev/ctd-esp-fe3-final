import React from "react";
import Form from "../Components/Form";
import { useGlobalContext } from "../Components/utils/global.context"; // Importa el contexto

const Contact = () => {
  const { state } = useGlobalContext(); // Obtén el tema

  return (
    <div className={state.theme}>
      {" "}
      {/* Aplica la clase del tema */}
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;

import React, { useState } from "react";

function BotonBorrar({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Borrar
    </button>
  );
}

function Nombre({ value, onChange }) {
  return (
    <div>
      <label>Nombre:</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        name="nombre"
        placeholder="Nombre"
      />
    </div>
  );
}

function Email({ value, onChange }) {
  return (
    <div>
      <label>Email:</label>
      <input
        type="email"
        value={value}
        onChange={onChange}
        name="email"
        placeholder="Email"
      />
    </div>
  );
}

function CardForm() {
  return (
    <div>
      <h2>Tus datos se inscribieron de manera exitosa.</h2>
    </div>
  );
}

function Form() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [formEnviado, setFormEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = false;

    if (nombre.length < 3) {
      setErrorNombre(
        "Por favor chequea que la información sea correcta. Tu nombre debe tener al menos 3 caracteres."
      );
      error = true;
    } else {
      setErrorNombre("");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorEmail(
        "Por favor chequea que la información sea correcta. El email debe ser válido."
      );
      error = true;
    } else {
      setErrorEmail("");
    }

    if (!error) {
      setFormEnviado(true);
    } else {
      setFormEnviado(false);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === "nombre") {
      setNombre(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };

  const handleClear = () => {
    setNombre("");
    setEmail("");
    setErrorNombre("");
    setErrorEmail("");
    setFormEnviado(false);
  };

  return (
    <div className="App">
      <h1>Ingresa tus datos</h1>
      <form onSubmit={handleSubmit}>
        <Nombre value={nombre} onChange={handleInputChange} />
        {errorNombre && <p>{errorNombre}</p>}

        <Email value={email} onChange={handleInputChange} />
        {errorEmail && <p>{errorEmail}</p>}

        <button type="submit">Enviar</button>
        <BotonBorrar onClick={handleClear} />
      </form>

      {formEnviado && <CardForm />}
    </div>
  );
}

export default Form;

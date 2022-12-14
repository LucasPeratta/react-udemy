import { useState } from "react";

const UseFormulario = (inicial) => {
  const [formulario, setFormulario] = useState(inicial);
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    setFormulario(inicial);
  };

  return [formulario, handleChange, reset];
};

export default UseFormulario;

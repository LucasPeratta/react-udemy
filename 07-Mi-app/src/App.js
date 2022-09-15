// Reglas de los hooks:
// -No se llaman en loops, ni condiciones, ni while, ni nada
// -Siempre en el nivel mas alto del unmountComponentAtNode
// Solo se llaman en 2 partes
// 1-Componentes de react (no se puede en una funcion)
// 2-customs hooks
// -Cuando creemos un custom hook siempre comienza con use + el nombre

import { useRef } from "react";

const App = () => {
  const ref = useRef();
  const inputRef = useRef();
  const click = () => {
    console.log(ref.current.clientHeight);
    ref.current.innerHTML = "Chanchito feliz";
  };
  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
      <div onClick={click} ref={ref}>
        Lala
      </div>
    </div>
  );
};
export default App;

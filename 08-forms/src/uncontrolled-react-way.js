import { useRef } from "react";

const App = () => {
  const input = useRef();
  const file = useRef();
  const submit = () => {
    // console.log(input.current.value);
    // console.log(file.current.files[0]);
    const form = new FormData(); //se crea un formulario
    form.append("archivo", file.current.files[0]); //se agregan todos los campos
    form.append("input", input.current.value);
    fetch("/lala", { method: "POST", body: form }); //se envia el formulario a algun lado
  };

  return (
    <div>
      <div>
        <span>lala</span>
        <input defaultValue="defecto" type="text" name="campo" ref={input} />
        <input type="file" ref={file} />
      </div>
      <input type="submit" value="Enviar" onClick={submit} />
    </div>
  );
};

export default App;

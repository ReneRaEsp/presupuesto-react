import { useState } from "react";
import shortid from 'shortid';
import Error from './Error.jsx';
const Formulario = ({ actualizarGastos, gastos }) => {
  // estado de gasto
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [ error, guardarError ] = useState(false);

  const agregarNombre = e => {
    guardarNombre(e.target.value);
  };
  const agregarCantidad = e => {
    guardarCantidad(parseInt(e.target.value));
  };
  //Cuando el usuario agrega un gasto
  const agregarGasto = e => {
    e.preventDefault();
    // Validar 
    if (cantidad < 1 || isNaN( cantidad ) || nombre.trim() === ''){
      guardarError(true);
      return;
    }
    // Construir el gasto
    const gasto  = {
      nombre: nombre,
      cantidad: cantidad,
      id: shortid.generate()
    };
    //Pasar el gasto al componente principal
    actualizarGastos([
      ...gastos,
      gasto
    ]);
    //Resetear el form
    guardarNombre('');
    guardarCantidad(0);
  };
  return (
    <form onSubmit={ agregarGasto } >
      <h2> Agrega tus gastos aquí </h2>
      { error ? <Error mensaje="Ambos campos son obligatorios o el gasto que ha introducido es incorrecto " /> : null }
      <div className="campo">
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange={agregarNombre}
        />
      </div>
      <div className="campo">
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          onChange={agregarCantidad}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Formulario;

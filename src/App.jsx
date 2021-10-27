import { useState } from "react";
import Pregunta from "./components/Pregunta.jsx";
import Formulario from "./components/Formulario.jsx";
import Gasto from "./components/Gasto.jsx";

function App() {
  // definit el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [ mostrarpregunta, actualizarPregunta ] = useState(true);
  const [ gastos, actualizarGastos ] = useState([]);
  return (
    <div className="container">
      <header>
        <h1> Gasto Semanal </h1>
        <div className="contenido-principal contenido">
        { mostrarpregunta 
          ?
            (
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPregunta={actualizarPregunta}
          />
            )
          : (
          <div className="row">
            <div className="one-half column">
              <Formulario
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarGastos={actualizarGastos}
                gastos={gastos}
              />
            </div>
            <div className="one-half column">
            <h2> Lista de gastos </h2>
            {
              gastos.map( gasto => (
                <Gasto 
                  key={gasto.id}
                  gasto={gasto}
                />
              ))
            }
            </div>
          </div>
          )
        }
        </div>
      </header>
    </div>
  );
}

export default App;

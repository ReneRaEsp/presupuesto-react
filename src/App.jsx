import { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta.jsx";
import Formulario from "./components/Formulario.jsx";
import Gastos from "./components/Gastos.jsx";
import ControlPresupuesto from "./components/ControlPresupuesto.jsx";

function App() {
  // definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, actualizarGastos] = useState([]);
  const [ gasto, guardarGasto ] = useState({});
  const [ crearGasto, guardarCrearGasto ] = useState(false);
  
//UseEffect actualiza el restante
  useEffect(()=>{
    if (crearGasto){
    //Agrega el nuevo presupuesto
    actualizarGastos([
      ...gastos,
      gasto
    ])
      //Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      // Resetear a false 
      guardarCrearGasto(false);
   }
  }, [gasto, crearGasto, gastos, restante]);
  return (
    <div className="container">
      <header>
        <h1> Gasto Semanal </h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarPresupuesto={guardarPresupuesto}
                  guardarRestante={guardarRestante}
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                  gastos={gastos}
                />
              </div>
              <div className="one-half column">
                <Gastos gastos={gastos} />
                <ControlPresupuesto 
                  presupuesto={ presupuesto }
                  restante={ restante }
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

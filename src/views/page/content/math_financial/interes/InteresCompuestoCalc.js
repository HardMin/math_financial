import { StrictMode} from "react";
import { VariablesIntrComp } from "./components/index";
import { BscrCapital, BscrMonto, BscrTasa, BscrTiempo, Capitalizacion } from "./components/calc";
import "../../../../../style/css/calc.css";


export const InteresCompuestoCalc = () => {
  return (
    <StrictMode>
      <section>
          <h4>Calculadora de Interés Compuesto</h4>
      </section>
      <VariablesIntrComp />
      <BscrMonto/>
      <BscrCapital/>
      <BscrTasa/>
      <BscrTiempo/>
      <Capitalizacion/>
    </StrictMode>
  );
};

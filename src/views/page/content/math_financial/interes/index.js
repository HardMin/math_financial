import { StrictMode } from "react";
import { Link } from "react-router-dom";
import { InteresCompuestoConcept } from "./InteresCompuestoConcept";
import { InteresCompuestoCalc } from "./InteresCompuestoCalc";
import '../../../../../style/css/subject_home.css';

export const InteresCompuestoHome = ()=>{

    return(
        <StrictMode>
            <section className="subjectHome">
                <div className="image-main_header"></div>
                <h3>Interés Compuesto</h3>
                <ul>
                    <li>
                        
                        <Link to="/definicion/interes-compuesto-concept"><span></span>Conceptos o definiciones</Link>
                        <p>Encuentra la información que necesitas.</p>
                    </li>
                    <li>
                        <Link to="/definicion/interes-compuesto-calc"><span></span>Calculadora</Link>
                        <p>Resuelve las operaciones con facilidad con esta calculadora.</p>
                    </li>
                </ul>
            </section>
        </StrictMode>    
    )
}

export {
    InteresCompuestoConcept,
    InteresCompuestoCalc
}
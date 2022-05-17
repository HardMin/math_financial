import {StrictMode} from 'react';

export const VariablesIntrComp = () => {
    return (
      <StrictMode>
        
        <section>
          <h5>Variables</h5>
          <table className="TableVariables">
            <tr>
              <th>C</th>
              <th>Capital</th>
            </tr>
            <tr>
              <th>M</th>
              <th>Monto</th>
            </tr>
            <tr>
              <th>i</th>
              <th>Tasa de interés</th>
            </tr>
            <tr>
              <th>n</th>
              <th>Tiempo</th>
            </tr>
            <tr>
              <th>I</th>
              <th>Interés</th>
            </tr>
          </table>
        </section>
      </StrictMode>
    );
  };
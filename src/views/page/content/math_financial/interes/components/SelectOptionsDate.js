import { v4 as uuid } from "uuid";

export const I_opt = [
  { id: uuid(), value: "i-anual", text: "Anual" },
  { id: uuid(), value: "i-semestral", text: "Semestral" },
  { id: uuid(), value: "i-cuatrimestral", text: "Cuatrimestral" },
  { id: uuid(), value: "i-trimestral", text: "Trimestral" },
  { id: uuid(), value: "i-bimestral", text: "Bimestral" },
  { id: uuid(), value: "i-mensual", text: "Mensual" },
  { id: uuid(), value: "i-semanal", text: "Semanal" },
  { id: uuid(), value: "i-diario", text: "Diario" },
  { id: uuid(), value: "i-continuo", text: "Continuo" },
];
export const N_opt = [
  { id: uuid(), value: "n-año", text: "Año" },
  { id: uuid(), value: "n-semestre", text: "Semestre" },
  { id: uuid(), value: "n-cuatrimestre", text: "Cuatrimestre" },
  { id: uuid(), value: "n-trimestre", text: "Trimestre" },
  { id: uuid(), value: "n-bimestre", text: "Bimestre" },
  { id: uuid(), value: "n-meses", text: "Meses" },
  { id: uuid(), value: "n-semanas", text: "Semanas" },
  { id: uuid(), value: "n-dias", text: "Dias" },
];
export const SelectOption = ({ data }) => {
  return (
    <>
      {data.map((option) => (
        <option value={option.value} key={option.id}>
          {option.text}
        </option>
      ))}
    </>
  );
};

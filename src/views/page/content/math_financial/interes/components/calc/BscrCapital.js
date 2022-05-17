import { StrictMode, useState } from "react";
import { Container, FormGroup, Input, Label, Col, Form } from "reactstrap";
import { I_opt, N_opt, SelectOption } from "../index";

export const BscrCapital = () => {
  const step = ".0000000001";

  //Hook useState
  const [I_Data, Set_i_data] = useState([{ value: "i-anual", text: "Anual" }]);
  const [N_Data, Set_n_data] = useState([{ value: "n-año", text: "Año" }]);
  const [Operation, SetOperation] = useState([
    {
      M: 0,
      i: 0,
      n: 0,
    },
  ]);
  const [ResultsShow, SetResultsShow] = useState("hide");

  const handleChangeSubmit_I_Data = (data) => {
    Set_i_data({ value: data.target.value });
  };
  const handleChangeSubmit_N_Data = (data) => {
    Set_n_data({ value: data.target.value });
  };
  const handleChangeSubmit_Inputs = (type, value) => {
    SetResultsShow("hide");

    switch (type) {
      case "M":
        return SetOperation((prev) => {
          return { ...prev, M: value };
        });
      case "i":
        return SetOperation((prev) => {
          return { ...prev, i: value };
        });
      case "n":
        return SetOperation((prev) => {
          return { ...prev, n: value };
        });
      default:
        break;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    SetResultsShow("show");
  };

  

  return (
    <StrictMode>
      <section className="SectionCalc">
        <h5>Buscar la Capital</h5>
        <Container fluid>
          <p>Ingrese los datos: </p>
          <Form onSubmit={handleSubmit} className="FormResults">
            <FormGroup row>
              <Label xs="2">M : </Label>
              <Col xs="8">
                <Input
                  required
                  step={step}
                  placeholder="M"
                  type="number"
                  onChange={(event) => {
                    handleChangeSubmit_Inputs("M", event.target.value);
                  }}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label xs="2">i : </Label>
              <Col xs="3">
                <Input
                  required
                  step={step}
                  placeholder="i"
                  type="number"
                  onChange={(event) => {
                    handleChangeSubmit_Inputs("i", event.target.value);
                  }}
                />
              </Col>
              <Col>
                <Input
                  type="select"
                  name="select"
                  value={I_Data.value}
                  onChange={handleChangeSubmit_I_Data}
                >
                  <SelectOption data={I_opt} />
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label xs="2">n : </Label>
              <Col xs="3">
                <Input
                  required
                  step={step}
                  placeholder="n"
                  type="number"
                  onChange={(event) => {
                    handleChangeSubmit_Inputs("n", event.target.value);
                  }}
                />
              </Col>
              <Col>
                <Input
                  type="select"
                  name="select"
                  value={N_Data.value}
                  onChange={handleChangeSubmit_N_Data}
                >
                  <SelectOption data={N_opt} />
                </Input>
              </Col>
            </FormGroup>
            <Input type="submit" value="Resultado" />
          </Form>
        </Container>
        <ShowResults 
          M={Operation.M}
          i={Operation.i}
          n={Operation.n}
          className={ResultsShow}
          />
      </section>
    </StrictMode>
  );
};
const ShowResults = ({ M, i, n, className }) => {
  let resultsFormula_1 =
    parseFloat(M) * Math.pow(1 + parseFloat(i), parseFloat(-n)); // 11656.27 aprox
  let resultsFormula_2 =
    parseFloat(M) / Math.pow(1 + parseFloat(i), parseFloat(n)); // 11656.27 aprox
  return (
    <StrictMode>
      <Container className={`ContainerResults BscrCapital ${className}`}>
        <h5>Resultado:</h5>
        <Container>
          <h6>1. Formula:</h6>
          <span> C = M * ( 1 + i )</span>
          <span className="Elevacion">-n </span>
        </Container>
        <br />
        <Container>
          <h6>Sustituir:</h6>
          <Container row className="ContainerStc">
            <span>
              C = {M} * ( 1 + {i})
            </span>
            <span className="Elevacion">{-n} </span>
          </Container>
          <br />
          <Container row>
            <span> C = {resultsFormula_1.toFixed(7)}</span>
          </Container>
        </Container>

        <br />

        <Container>
          <h6>2. Formula:</h6>
          <Container className="ExprMath">
            <span className="NumNormal">C</span>
            <span className="Signo"> = </span>
            <span className="Division">
              <span className="DivisionNumerador">M</span>
              <span className="DivisionDenominador">
                ( 1 + i )<span className="Elevacion"></span>
              </span>
            </span>
          </Container>
        </Container>
        <br />
        <Container>
          <h6>Sustituir:</h6>
          <Container className="ExprMath">
            <span className="NumNormal">C</span>
            <span className="Signo"> = </span>
            <span className="Division">
              <span className="DivisionNumerador">{M}</span>
              <span className="DivisionDenominador">
                ( 1 + {i} )<span className="Elevacion"></span>
              </span>
            </span>
          </Container>
          <br />
          <Container row>
            <span> C = {resultsFormula_2.toFixed(7)}</span>
          </Container>
        </Container>
      </Container>
    </StrictMode>
  );
};

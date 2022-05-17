import { StrictMode, useState } from "react";
import { Container, FormGroup, Input, Label, Col, Form } from "reactstrap";
import { N_opt, SelectOption } from "../index";

export const BscrTasa = () => {
  //Hook useState
  const [N_Data, Set_n_data] = useState([{ value: "n-año", text: "Año" }]);
  const [Operation, SetOperation] = useState([
    {
      M: 0,
      C: 0,
      n: 0,
    },
  ]);
  const [ResultsShow, SetResultsShow] = useState("hide");

  const handleChangeSubmit_N_Data = (data) => {
    Set_n_data({ value: data.target.value });
  };
  const handleChangeSubmit_Inputs = (type, value) => {
    SetResultsShow("hide");

    switch (type) {
      case "M":
        return SetOperation((prev) => {
          console.log(value);
          return { ...prev, M: value };
        });
      case "C":
        return SetOperation((prev) => {
          return { ...prev, C: value };
        });
      case "n":
        return SetOperation((prev) => {
          return { ...prev, n: value };
        });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    SetResultsShow("show");
  };
  const ShowResults = ({className})=>{
    if(className == "show"){
      return <Results C={Operation.C} M={Operation.M} n={Operation.n} className={className}/>
    }
    else{
      return <Results className={className}/>
    }
  }
  return (
    <StrictMode>
      <section className="SectionCalc">
        <h5>Buscar la Tasa de interés</h5>
        <Container fluid>
          <p>Ingrese los datos: </p>
          <Form onSubmit={handleSubmit} className="FormResults">
            <FormGroup row>
              <Label xs="2">M : </Label>
              <Col xs="8">
                <Input
                  required
                  step=".01"
                  placeholder="M"
                  type="number"
                  onChange={(event) => {
                    handleChangeSubmit_Inputs("M", event.target.value);
                  }}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label xs="2">C : </Label>
              <Col xs="8">
                <Input
                  required
                  step=".01"
                  placeholder="C"
                  type="number"
                  onChange={(event) => {
                    handleChangeSubmit_Inputs("C", event.target.value);
                  }}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label xs="2">n : </Label>
              <Col xs="3">
                <Input
                  required
                  step=".01"
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
          className={ResultsShow}
        />
      </section>
    </StrictMode>
  );
};
const Results = ({M, C, n, className }) => {
  let results = Math.pow(M/C, 1/n);

  return (
    <StrictMode>
      <Container className={`ContainerResults BscrTasa ${className}`}>
        <h5>Resultado:</h5>
        <Container className="ExprMath">
          <span className="NumNormal">i</span>
          <span className="Signo"> = </span>
          <span className="Raiz">
            <span className="RaizNumerador">
              <span className="RaizElevacion">n</span>
            </span>
            <span className="RaizDenominador">
              <span className="Division">
                <div className="ContainerDivision">
                  <span className="DivisionNumerador">M</span>
                  <span className="DivisionDenominador">C</span>
                </div>
              </span>
            </span>
          </span>
          <span className="Signo"> - </span>
          <span className="NumNormal">1</span>
        </Container>
        <br />
        <h6>Sustituir</h6>
        <Container className="ExprMath">
          <span className="NumNormal">i</span>
          <span className="Signo"> = </span>
          <span className="Raiz">
            <span className="RaizNumerador">
              <span className="RaizElevacion">{n}</span>
            </span>
            <span className="RaizDenominador">
              <span className="Division">
                <div className="ContainerDivision">
                  <span className="DivisionNumerador">{M}</span>
                  <span className="DivisionDenominador">{C}</span>
                </div>
              </span>
            </span>
          </span>
          <span className="Signo"> - </span>
          <span className="NumNormal">1</span>
        </Container>
        <br />
        <Container className="ExprMath">
          <span className="NumNormal">C</span>
          <span className="Signo"> = </span>
          <span className="NumNormal">{results}</span>
        </Container>
      </Container>
    </StrictMode>
  );
};

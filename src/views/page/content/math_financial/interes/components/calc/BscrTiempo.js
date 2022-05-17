import { StrictMode, useState } from "react";
import { Container, FormGroup, Input, Label, Col, Form } from "reactstrap";
import { I_opt, SelectOption } from "../index";

export const BscrTiempo = () => {
  //Hook useState
  const [I_Data, Set_i_data] = useState([{ value: "i-anual", text: "Anual" }]);
  const [Operation, SetOperation] = useState([
    {
      M: 0,
      C: 0,
      i: 0,
    },
  ]);
  const [ResultsShow, SetResultsShow] = useState("hide");

  const handleChangeSubmit_I_Data = (data) => {
    Set_i_data({ value: data.target.value });
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
      case "i":
        return SetOperation((prev) => {
          return { ...prev, i: value };
        });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    SetResultsShow("show");
  };
  const ShowResults = ({ className }) => {
    if (className == "show") {
      return (
        <Results
          C={Operation.C}
          M={Operation.M}
          i={Operation.i}
          className={className}
        />
      );
    }
    else{
      return <Results className={className} />;
    }
  };
  return (
    <StrictMode>
      <section className="SectionCalc">
        <h5>Buscar la Tiempo</h5>
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
              <Label xs="2">i : </Label>
              <Col xs="3">
                <Input
                  required
                  step=".01"
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
            <Input type="submit" value="Resultado" />
          </Form>
        </Container>
        <ShowResults className={ResultsShow} />
      </section>
    </StrictMode>
  );
};
const Results = ({ M, C, i, className }) => {
  let results = (Math.log(M)-Math.log(C))/Math.log(1+parseFloat(i));

  return (
    <StrictMode>
      <Container className={`ContainerResults BscrTasa ${className}`}>
        <h5>Resultado:</h5>
        <Container className="ExprMath">
          <span className="NumNormal">n</span>
          <span className="Signo"> = </span>
          <span className="Division">
            <span row className="DivisionNumerador">LN( M ) <span className="Signo"> - </span> LN( C )</span>
            <span row className="DivisionDenominador">LN( 1 + i )</span>
          </span>
        </Container>
        <br />
        <h6>Sustituir</h6>
        <Container className="ExprMath">
          <span className="NumNormal">n</span>
          <span className="Signo"> = </span>
          <span className="Division">
            <span className="DivisionNumerador">LN( {M} ) <span className="Signo"> - </span> LN( {C} )</span>
            <span className="DivisionDenominador">LN( 1 + {i} )</span>
          </span>
        </Container>
        <br />
        <Container className="ExprMath">
          <span className="NumNormal">n</span>
          <span className="Signo"> = </span>
          <span className="NumNormal">{results}</span>
        </Container>
      </Container>
    </StrictMode>
  );
};

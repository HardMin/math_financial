import { StrictMode, useState } from "react";
import {
  Container,
  FormGroup,
  Input,
  Label,
  Col,
  Form,
} from "reactstrap";
import { I_opt, N_opt, SelectOption } from "../index";


export const BscrMonto = () => {
  //Hook useState
  const [I_Data, Set_i_data] = useState([{ value: "i-anual", text: "Anual" }]);
  const [N_Data, Set_n_data] = useState([{ value: "n-año", text: "Año" }]);
  const [Operation, SetOperation] = useState([
    {
      C: 0,
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
      case "C":
        return SetOperation((prev) => {
          return { ...prev, C: value };
        });
      case "i":
        return SetOperation((prev) => {
          return { ...prev, i: value };
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
      return <Results C={Operation.C} i={Operation.i} n={Operation.n} className={className}/>
    }
    else{
      return <Results className={className}/>
    }
  }
  return (
    <StrictMode>
      <section className="SectionCalc">
        <h5>Buscar el Monto</h5>
        <Container fluid>
          <p>Ingrese los datos: </p>
          <Form onSubmit={handleSubmit} className="FormResults">
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
const Results = ({ C, i, n, className }) => {
  let results = parseFloat(C) * Math.pow(1 + parseFloat(i), parseFloat(n));

  return (
    <StrictMode>
      <Container className={`ContainerResults BscrMonto ${className}`}>
        <h5>resultado:</h5>
        <Container>
          <h6>formula:</h6>
          <span> M = C * ( 1 + i )</span>
          <span className="elevacion">n </span>
        </Container>
        <br />
        <Container>
          <h6>Sustituir:</h6>
          <Container row className="Containerstc">
            <span>
              M = {C} * ( 1 + {i})
            </span>
            <span className="elevacion">{n} </span>
          </Container>
          <br />
          <Container row>
            <span> M = {results.toFixed(7)}</span>
          </Container>
        </Container>
      </Container>
    </StrictMode>
  );
};

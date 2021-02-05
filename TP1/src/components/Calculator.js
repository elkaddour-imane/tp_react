import React, { useState } from "react";
 
import {
  Jumbotron,
  Container,
  Form,
  FormGroup,
  FormControl,
  Row,
  Col,
  Button,
  Alert,
} from "react-bootstrap";

export default function Calculator() {


  
  const [state, setState] = useState({
    poids: null,
    taille: null,
    IMC: null,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, IMC: state.poids / state.taille ** 2 });
  };

  const reset = () =>
    setState({
      poids: null,
      taille: null,
      IMC: null,
    });

  const getResult = (imc) => {
    const poids = {
      insuffisance: { val: "insuffisance pondérale", textColor: "text-info" },
      normal: { val: "poids normal", textColor: "text-success" },
      surpoids: { val: "surpoids", textColor: "text-warning" },
      obesite: { val: "obésité", textColor: "text-danger" },
    };
    if (imc < 18.5) return poids.insuffisance;
      if (imc > 18.5 && imc < 25) return poids.normal;
      if (imc > 25 && imc < 29.9) return poids.surpoids;
       if (imc > 30) return poids.obesite;
  };

  return (
    <Container>
      <Jumbotron>
        <h3>Calcul d'IMC</h3>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <FormGroup>
                <FormControl
                  onChange={handleChange}
                  value={state.poids !== null ? state.poids : ""}
                  name="poids"
                  type="text"
                  placeholder="Poids en (Kg)"
                  required
                  autoComplete="off"
                />
              </FormGroup>
            </Col>

            <Col>
              <FormGroup>
                <FormControl
                  onChange={handleChange}
                  value={state.taille !== null ? state.taille : ""}
                  name="taille"
                  type="text"
                  placeholder="Taille en (m)"
                  required
                  autoComplete="off"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Button onClick={reset} variant="secondary">
                  Rénisialiser
                </Button>
                <Button type="submit" className="ml-3" variant="info">
                  Calculer
                </Button>
              </FormGroup>
            </Col>
          </Row>
          {state.IMC !== null ? (
            <Alert className="mt-3" variant={"light"}>
              Le resultat est: &nbsp;
              <Alert.Link>{state.IMC.toFixed(2)}</Alert.Link>
              <Alert.Link
                className={`${getResult(state.IMC).textColor} float-right`}
                href="#"
              >
                {getResult(state.IMC).val}
              </Alert.Link>
            </Alert>
          ) : null}
        </Form>
      </Jumbotron>
    </Container>
  );
}

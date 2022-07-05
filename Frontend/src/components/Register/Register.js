import React from 'react';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import './Register.css';

const Register = ({ handleRegister }) => {
  return (
    <div className='registerForm'>
      <h2>Registrate!</h2>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for='nombre' hidden>
                Nombre
              </Label>
              <Input id='nombre' name='nombre' placeholder='Nombre' />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='apellido' hidden>
                Apellido
              </Label>
              <Input id='apellido' name='apellido' placeholder='Apellido' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for='email' hidden>
                Email
              </Label>
              <Input id='email' name='email' placeholder='Email' type='email' />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='password' hidden>
                Password
              </Label>
              <Input
                id='password'
                name='password'
                placeholder='Password'
                type='password'
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for='address' hidden>
                Dirección
              </Label>
              <Input id='address' name='address' placeholder='Direccion' />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for='telefono' hidden>
                Teléfono
              </Label>
              <Input id='telefono' name='telefono' placeholder='Teléfono' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for='city' hidden>
                Ciudad
              </Label>
              <Input id='city' name='city' placeholder='Ciudad' />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for='state' hidden>
                Provincia
              </Label>
              <Input id='state' name='state' placeholder='Provincia' />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for='codigopostal' hidden>
                CP
              </Label>
              <Input id='codigopostal' name='codigopostal' placeholder='C.P.' />
            </FormGroup>
          </Col>
        </Row>
        <Button color='success'>Registarse</Button>
      </Form>

      <Button id='chgButton' onClick={(e) => handleRegister(e)}>
        Loguiarse
      </Button>
    </div>
  );
};

export default Register;

import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Login.css';

const Login = ({ handleRegister }) => {


  return (
    <div className='loginContainer'>
      <h2>Bienvenido! Inicia Sesión</h2>
      <Form>
        <FormGroup>
          <Label for='email' hidden>
            Email
          </Label>
          <Input id='email' name='email' placeholder='Email' type='email' />
        </FormGroup>{' '}
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
        </FormGroup>{' '}
        <Button color='success'>Login</Button>
        <Button id='chgBut' onClick={(e) => handleRegister(e)}>
        Registrarse
      </Button>
      </Form>

    </div>
  );
};

export default Login;

import React, { useRef } from "react";
import { useDispatch } from 'react-redux';

import { signInRequest } from 'store/modules/auth/actions';

import api from 'api';
import loginSchema from 'validators/User/login.schema';
import validate from 'utils/yupValidate';

import Button from "components/Button";
import Form from "components/Form";
import Input from "components/Input";
import { Container, FormContainer, Title } from "./styles";
import { Grid } from "@material-ui/core";

const Login = () => {

  const formRef = useRef(null);

  const dispatch = useDispatch();

  async function login(authData) {
    try {
      const { success, errors } = await validate(loginSchema, authData);
      if (!success) return formRef.current.setErrors(errors);
      formRef.current.setErrors({ });

      dispatch(signInRequest(authData));
    } catch (error) {
    }
  }

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={login} ref={formRef}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Title>Login</Title>
            </Grid>
            <Grid item xs={12}>
              <Input name="login" placeholder="Login" />
            </Grid>
            <Grid item xs={12}>
              <Input name="password" type="password" placeholder="Senha"/>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth type="submit">Entrar</Button>
            </Grid>
          </Grid>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;

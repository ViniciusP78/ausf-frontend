import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signInRequest, clearError } from "store/modules/auth/actions";
import { openAlert } from "store/modules/alert/actions";

import api from "api";
import loginSchema from "validators/User/login.schema";
import validate from "utils/yupValidate";

import { ReactComponent as LoginIcon } from "assets/icons/person.svg";
import { ReactComponent as PasswordIcon } from "assets/icons/password.svg";

import Button from "components/Button";
import Form from "components/Form";
import Input from "components/Input";
import { Container, FormContainer, GreenSide, Title, Subtitle } from "./styles";
import { Grid } from "@material-ui/core";

const Login = () => {
  const formRef = useRef(null);

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  async function login(authData) {
    try {
      const { success, errors } = await validate(loginSchema, authData);
      if (!success) return formRef.current.setErrors(errors);
      formRef.current.setErrors({});

      dispatch(signInRequest(authData));
    } catch (error) {}
  }

  useEffect(() => {
    if (error) {
      dispatch(openAlert({
        message: "E-mail ou senha inválida",
        severity: "error",
        duration: 4000,
      }));
      dispatch(clearError());
    }
  }, [error]);

  return (
    <Container>
      <GreenSide />

      <FormContainer>
        <Title>Bem vindo à USF Digital</Title>

        <Subtitle>
          Insira suas credenciais para <br />
          acessar o sistema
        </Subtitle>

        <Form onSubmit={login} ref={formRef}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input name="login" placeholder="Login" icon={LoginIcon} />
            </Grid>
            <Grid item xs={12}>
              <Input
                name="password"
                type="password"
                placeholder="Senha"
                icon={PasswordIcon}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                loading={loading}
                fullWidth
                type="submit"
                style={{ padding: 12, fontWeight: 500 }}
              >
                Entrar
              </Button>
            </Grid>
          </Grid>
        </Form>
      </FormContainer>

      <GreenSide />
    </Container>
  );
};

export default Login;

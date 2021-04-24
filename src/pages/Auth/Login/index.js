import React from "react";

import Button from "components/Button";
import Form from "components/Form";
import Input from "components/Input";
import { Container, FormContainer, Title } from "./styles";
import { Grid } from "@material-ui/core";

const Login = () => {
  return (
    <Container>
      <FormContainer>
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Title>Login</Title>
            </Grid>
            <Grid item xs={12}>
              <Input name="login" placeholder="Login" label="login" />
            </Grid>
            <Grid item xs={12}>
              <Input name="password" placeholder="Senha"/>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth>Entrar</Button>
            </Grid>
          </Grid>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;

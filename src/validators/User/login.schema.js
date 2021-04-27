import * as yup from 'yup';

export default yup.object().shape({
  login: yup.string().required("Digite seu login"),
  password: yup.string().required("Digite sua senha"),
});
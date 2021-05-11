import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  cargo_id: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
  login: yup.string().required("Campo obrigatório"),
});
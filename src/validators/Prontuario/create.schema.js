import * as yup from 'yup';

export default yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
  nome_mae: yup.string().required("Campo obrigatório"),
  CPF: yup.string().required("Campo obrigatório"),
  data_nascimento: yup.date().required("Campo obrigatório"),
  cidade_nascimento: yup.string().required("Campo obrigatório"),
  observacoes: yup.string().required("Campo obrigatório"),
});
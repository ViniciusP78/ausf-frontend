import * as yup from "yup";

import cpfValidate from "utils/cpfValidate";

export default yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
  nome_mae: yup.string().required("Campo obrigatório"),
  CPF: yup
    .string()
    .required("Campo obrigatório")
    .test("is-valid", "Documento inválido", (val) => cpfValidate(val))
    .label("CPF"),
  data_nascimento: yup.string(),
  cidade_nascimento: yup.string().required("Campo obrigatório"),
  observacoes: yup.string(),
});

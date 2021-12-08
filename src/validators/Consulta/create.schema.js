import * as yup from "yup";

export const steps = [
  yup.object().shape({
    data_agendada: yup
      .date()
      .test(
        "is-min",
        "Data inválida",
        (val) => new Date(val).getTime() > new Date().getTime()
      )
      .required("Selecione uma data"),
  }),
  yup.object().shape({
    prontuario_id: yup.string().required("Selecione um paciente"),
    medico_id: yup.string().required("Selecione um médico")
  }),
];

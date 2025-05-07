import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  nomePaciente: Yup.string().required("Nome do paciente é obrigatório"),
  idade: Yup.number()
    .required("Idade é obrigatória")
    .positive("Idade deve ser maior que 0"),
  peso: Yup.number()
    .required("Peso é obrigatório")
    .positive("Peso deve ser maior que 0"),
  altura: Yup.number()
    .required("Altura é obrigatória")
    .positive("Altura deve ser maior que 0"),
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("E-mail é obrigatório"),
  diagnostico: Yup.string().required("Diagnóstico é obrigatório"),
  dataConsulta: Yup.string().required("Data da consulta é obrigatória"),
});

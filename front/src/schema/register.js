import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  // email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter no mínimo 6 digitos')
    .required('Senha é obrigatório'),
  repeatPassword: yup
    .string()
    .required('Confirme sua senha!')
    .oneOf([yup.ref('password')], 'Senhas não coincidem'),
})

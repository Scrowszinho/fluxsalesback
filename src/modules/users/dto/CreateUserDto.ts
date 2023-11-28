import { z as zod } from 'zod';

export const CreateUser = zod.object({
  name: zod
    .string({
      required_error: 'Nome precisa ser preenchido',
      invalid_type_error: 'Digite um nome valido',
    })
    .min(3, 'Digite um nome valido'),
  email: zod
    .string({
      required_error: 'Email precisa ser preenchido',
      invalid_type_error: 'Digite um email valido',
    })
    .email('Digite um email valido'),
  password: zod
    .string({
      required_error: 'Senha precisa ser preenchido',
      invalid_type_error: 'Digite uma senha valida',
    })
    .min(3, 'Digite uma senha maior'),
  document: zod
    .string({
      required_error: 'Documento precisa ser preenchido',
      invalid_type_error: 'Digite um documento valido',
    })
    .min(11, 'Documento com tamanho invalido'),
  phone: zod
    .string({
      required_error: 'Telefone precisa ser preenchido',
      invalid_type_error: 'Digite um telefone valido',
    })
    .min(10, 'Telefone com tamanho invalido'),
  born_date: zod.string({
    required_error: 'Data de Nascimento precisa ser preenchido',
    invalid_type_error: 'Digite uma data de nascimento valida',
  }),
});

export const LoginUser = zod.object({
  email: zod
    .string({
      required_error: 'Email precisa ser preenchido',
      invalid_type_error: 'Digite um email valido',
    })
    .email('Digite um email valido'),
  password: zod
    .string({
      required_error: 'Senha precisa ser preenchido',
      invalid_type_error: 'Digite uma senha valida',
    })
});

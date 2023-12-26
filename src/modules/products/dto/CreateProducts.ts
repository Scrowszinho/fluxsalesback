import { z as zod } from 'zod';

export const CreateProduct = zod.object({
  name: zod.string({
    required_error: 'Nome precisa ser preenchido',
    invalid_type_error: 'Digite um nome valido',
  }),
  weight: zod.number({
    required_error: 'Nome precisa ser preenchido',
    invalid_type_error: 'Digite um peso valido',
  }),
  description: zod.string({
    required_error: 'Descrição precisa ser preenchido',
    invalid_type_error: 'Digite uma descrição valida',
  }),
  value: zod.number({
    required_error: 'Valor precisa ser preenchido',
    invalid_type_error: 'Digite um valor valido',
  }),
});

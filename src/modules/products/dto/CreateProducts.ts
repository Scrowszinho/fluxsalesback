import { z as zod } from 'zod';

export const CreateProduct = zod.object({
  name: zod.string({
    required_error: 'Nome precisa ser preenchido',
    invalid_type_error: 'Digite um nome valido',
  }),
  weight: zod.number({
    required_error: 'Nome precisa ser preenchido',
    invalid_type_error: 'Digite um nome valido',
  }),
});

import { z as zod } from 'zod';

export const CreatePermission = zod.object({
  name: zod
    .string({
      required_error: 'Nome precisa ser preenchido',
      invalid_type_error: 'Digite um nome valido',
    })
    .min(3, 'Digite um nome valido'),
  unique_name: zod
    .string({
      required_error: 'Nome unico precisa ser preenchido',
      invalid_type_error: 'Digite um nome unico valido',
    })
    .min(3, 'Digite um nome unico valido'),
});

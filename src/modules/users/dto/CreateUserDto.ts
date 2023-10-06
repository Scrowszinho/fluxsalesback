import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O campo "nome" não pode estar vazio.' })
  name: string;
  @IsEmail(
    {},
    { message: 'O campo "email" deve ser um endereço de e-mail válido.' }
  )
  @IsNotEmpty({ message: 'O campo "email" não pode estar vazio.' })
  email: string;

  @IsNotEmpty({ message: 'O campo "senha" não pode estar vazio.' })
  password: string;

  @IsNotEmpty({ message: 'O campo "data de nascimento" não pode estar vazio.' })
  born_date: Date;

  @IsNotEmpty({ message: 'O campo "cpf" não pode estar vazio.' })
  document: string;

  @IsNotEmpty({ message: 'O campo "celular" não pode estar vazio.' })
  phone: string;
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  document: string;
  phone: string;
  born_date: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}


export interface IUserClean {
  id?: number;
  name: string;
  email: string;
  password?: string;
  born_date: string;
}

export interface IUserLoged {
  user: IUserClean,
  token: string
  expires_in: Date
}

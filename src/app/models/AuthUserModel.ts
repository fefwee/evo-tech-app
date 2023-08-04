export interface AuthUserModel {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export interface AuthParams {
  username: string;
  password: any;
}
export interface IUser {
  age: number;
  ip: number;
  email: string;
  firstName: string;
  image: string;
}

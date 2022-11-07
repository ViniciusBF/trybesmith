export interface IErrorMap {
  REQUIRED_DATA: number;
  INVALID_DATA: number;
}

export interface ILogin {
  type: keyof IErrorMap | null;
  message: string;
}

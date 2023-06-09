import { IUser } from "./i-user";

export interface LoggedUser {
  accessToken: string;
  user: IUser;
}

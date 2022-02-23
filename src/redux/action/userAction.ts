import { IUser } from "../../Types";
import { ActionType } from "../ActionTypes";

interface addUser {
  type: ActionType.ADD_USER;
  payLoad: IUser;
}

interface clearUser {
  type: ActionType.CLEAR_USER;
  payLoad: String;
}

export type userAction = addUser | clearUser;

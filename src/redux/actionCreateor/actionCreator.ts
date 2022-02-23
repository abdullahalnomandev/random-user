import { IUser } from "../../Types";
import { ActionType } from "./../ActionTypes";

export const addToUser = (payLoad: IUser) => {
  return { type: ActionType.ADD_USER, payLoad };
};

export const clearUser = () => {
  return { type: ActionType.CLEAR_USER };
};

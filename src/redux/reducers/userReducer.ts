import { IUser } from "../../Types";
import { userAction } from "../action/userAction";
import { ActionType } from "../ActionTypes";

interface State {
  user: IUser;
}

const initialState = {
  user: { username: "", password: "" },
};

export const userReducer = ( state: State = initialState, action: userAction) => {
  switch (action.type) {
    case ActionType.ADD_USER: {
      console.log(action);

      return { ...state, user: action.payLoad };
    }
    case ActionType.CLEAR_USER: {
      return { ...state, user: {} };
    }

    default: {
      return state;
    }
  }
};

import { UPLOAD_PICTURE, LOAD_USER_SUCCESS,GETUSERS_SUCCESS } from "../action/type";
let initialState = {
  avatar: null,
  users:[]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_SUCCESS:
      return action.payload;
    case UPLOAD_PICTURE:
      return {
        ...state,
        avatar: action.payload,
      };
      case GETUSERS_SUCCESS:
        return{
          ...state,
          users:action.payload
        }

    default:
      return state;
  }
};

export default userReducer;
